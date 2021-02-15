/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import { User } from '../types/user';
import UserModel from '../models/users';
import PostModel from '../models/posts';
import { RequestWithUser } from '../types/auth';

export const getUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const userId: string = req.params.id;

  try {
    const findUser: User = await UserModel.findOne({ name: userId });
    if (!findUser) return res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user: findUser });
  } catch (error) {
    next(error);
  }
};

export const getUserStatus = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const userId: string = req.params.id;

  try {
    const findUser: User = await UserModel.findOne({ name: userId });
    if (!findUser) return res.status(409).send({ message: "You're not user" });

    const author = findUser._id;
    const published = await PostModel.countDocuments({ author, status: 'approved' });
    const pending = await PostModel.countDocuments({ author, status: 'pending' });
    const comments = 0;
    const tags = 0;
    const status = { published, pending, comments, tags };

    res.status(200).json({ status });
  } catch (error) {
    next(error);
  }
};

export const updateStatus = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const userData = req.body;

  try {
    const user: User = await UserModel.findByIdAndUpdate(userData._id, userData);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
