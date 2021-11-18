/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response, NextFunction } from 'express';
import NotificationModel from '../models/notification';
import TransactionModel from '../models/transaction';
import UserModel from '../models/users';
import { RequestWithUser } from '../types/auth';
import { User } from '../types/user';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const getBalance = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;

  try {
    const findUser: User = await UserModel.findById(_id);
    const balance = findUser.stripeId
      ? await stripe.balance.retrieve({
          stripeAccount: findUser.stripeId,
        })
      : { available: [], instant_available: [], pending: [] };

    res.status(201).json(balance);
  } catch (error) {
    next(error);
  }
};

export const createAccount = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id, email, name } = req.user;
  const { returnUrl } = req.body;

  try {
    const account = await stripe.accounts.create({
      type: 'express',
      email,
      country: 'US',
      business_type: 'individual',
      business_profile: {
        url: process.env.BASE_URL + '/users/' + name,
      },
    });

    const accountLinks = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'https://dankstocks.com',
      return_url: 'https://dankstocks.com' + returnUrl,
      type: 'account_onboarding',
    });

    await UserModel.findOneAndUpdate({ _id }, { stripeId: account.id });
    res.status(201).json({ data: accountLinks.url });
  } catch (error) {
    next(error);
  }
};

export const createPaymentIntent = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { stripeId, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method_types: ['card'],
      amount: amount * 100,
      currency: 'usd',
      application_fee_amount: amount * 20,
      transfer_data: {
        destination: stripeId,
      },
    });
    res.status(201).json({ secret: paymentIntent.client_secret });
  } catch (error) {
    next(error);
  }
};

export const transfer = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { stripeId, author, amount, type } = req.body;
  const io = req.app.get('socketio');

  try {
    await stripe.transfers.create({
      amount: amount * 100,
      currency: 'usd',
      destination: stripeId,
    });

    await NotificationModel.create({
      user: author,
      type: type,
      title: `New payment received`,
      description: `You received $${amount}`,
      isRead: false,
      url: '#',
    });
    io.emit('Notify');

    res.status(201).json({ data: 'success' });
  } catch (error) {
    next(error);
  }
};

export const createRefund = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id, payment_intent, user } = req.body;
  const io = req.app.get('socketio');

  try {
    await TransactionModel.findByIdAndUpdate(_id, { refund: true });
    const response = await stripe.refunds.create({ payment_intent });
    await NotificationModel.create({
      user,
      type: 'tip_refunded',
      title: `Tip refunded`,
      description: `Unfortunately a ${response.amount} tip was refunded `,
      isRead: false,
      url: '#',
    });
    io.emit('Notify');

    res.status(201).json({ data: 'success' });
  } catch (error) {
    next(error);
  }
};
