import { NextFunction, Response } from 'express';
import { User } from '../types/user';
import { RequestWithUser } from '../types/auth';
import UserModel from '../models/users';

export const getInfo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;

  try {
    const findUser: User = await UserModel.findById(_id);
    res.status(200).json({ user: findUser });
  } catch (error) {
    next(error);
  }
};
