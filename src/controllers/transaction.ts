/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response, NextFunction } from 'express';
import TransactionModel from '../models/transaction';
import { RequestWithUser } from '../types/auth';
import { Transaction } from '../types/transaction';

export const createTransaction = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const data: Transaction = req.body;

  try {
    const transaction: Transaction = await TransactionModel.create(data);
    res.status(200).json({ transaction });
  } catch (error) {
    next(error);
  }
};

export const TransactionsAll = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { page, sortBy, limit } = req.body;
  const sort = sortBy ? sortBy : { createdAt: -1 };
  const skip = limit ? limit : 7;

  try {
    const count = await TransactionModel.countDocuments({ $or: [{ user: _id }, { client: _id }] });
    const transactions: Transaction[] = await TransactionModel.find({ $or: [{ user: _id }, { client: _id }] })
      .populate('client')
      .sort(sort)
      .skip(skip * page)
      .limit(skip);

    res.status(201).json({ transactions, count });
  } catch (error) {
    next(error);
  }
};

export const RefundTransaction = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.body;
  const io = req.app.get('socketio');

  try {
    const transaction: Transaction = await TransactionModel.findByIdAndUpdate(_id, { requestRefund: true });
    io.emit('requestRefund');
    res.status(200).json({ transaction });
  } catch (error) {
    next(error);
  }
};
