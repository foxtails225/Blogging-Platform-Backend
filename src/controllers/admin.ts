/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response, NextFunction } from 'express';
import { RequestWithUser } from '../types/auth';
import PostModel from '../models/posts';
import UserModel from '../models/users';
import TransactionModel from '../models/transaction';
import { Post } from '../types/post';
import { User } from '../types/user';
import { Transaction } from '../types/transaction';

export const getPosts = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { page, sortBy, limit } = req.body;
  const sort = sortBy ? sortBy : { createdAt: -1 };
  const skip = limit ? limit : 7;

  try {
    const count = await PostModel.countDocuments();
    const posts: Post[] = await PostModel.find()
      .populate('author')
      .sort(sort)
      .skip(skip * page)
      .limit(skip);

    res.status(200).json({ posts, count });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { page, sortBy, limit } = req.body;
  const sort = sortBy ? sortBy : { createdAt: -1 };
  const skip = limit ? limit : 7;

  try {
    const count = await UserModel.countDocuments();
    //@ts-ignore
    const users: Post[] = await UserModel.find({ role: { $ne: 'admin' } })
      .sort(sort)
      .skip(skip * page)
      .limit(skip);

    res.status(200).json({ users, count });
  } catch (error) {
    next(error);
  }
};

export const getRefunds = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { page, sortBy, limit } = req.body;
  const sort = sortBy ? sortBy : { createdAt: -1 };
  const skip = limit ? limit : 7;

  try {
    const count = await TransactionModel.countDocuments({ requestRefund: true });
    const transactions: Transaction[] = await TransactionModel.find({ requestRefund: true })
      .populate('client')
      .sort(sort)
      .skip(skip * page)
      .limit(skip);

    res.status(201).json({ transactions, count });
  } catch (error) {
    next(error);
  }
};

export const getAlert = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const user: User = await UserModel.findOne({ role: 'admin' }, { alert: 1, alertType: 1, alertChecked: 1, _id: 0 });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const createAlert = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const alertData = req.body;

  try {
    const user: User = await UserModel.findByIdAndUpdate(_id, alertData);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
