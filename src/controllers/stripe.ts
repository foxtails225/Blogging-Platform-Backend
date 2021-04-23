/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response, NextFunction } from 'express';
import UserModel from '../models/users';
import { RequestWithUser } from '../types/auth';
// import * as Stripe from 'stripe';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const baseUrl = process.env.BASE_URL;

export const createAccount = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id, email } = req.user;
  const { returnUrl } = req.body;

  try {
    const account = await stripe.accounts.create({ type: 'express', email, country: 'US' });
    const accountLinks = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: baseUrl,
      return_url: baseUrl + returnUrl,
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
  const { stripeId, amount } = req.body;

  try {
    await stripe.transfers.create({
      amount: amount * 100,
      currency: 'usd',
      destination: stripeId,
    });

    res.status(201).json({ data: 'success' });
  } catch (error) {
    next(error);
  }
};
