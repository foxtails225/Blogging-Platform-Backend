import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../exceptions/HttpException';
import { User } from '../types/user';
import UserModel from '../models/users';
import { isEmpty } from '../utils/util';

export const getInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { authorization } = req.headers;

  !authorization && res.status(401).send({ message: 'Authorization token missing' });
  const userId = getIdByToken(authorization);

  try {
    const findUser: User = await UserModel.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");
    res.status(200).json({ user: findUser });
  } catch (error) {
    next(error);
  }
};

export const updateInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { authorization } = req.headers;
  const { userData } = req.body;

  !authorization && res.status(401).send({ message: 'Authorization token missing' });
  const userId = getIdByToken(authorization);

  try {
    const findUser: User = await UserModel.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const updateUserById: User = await UserModel.findByIdAndUpdate(userId, { ...userData });
    if (!updateUserById) throw new HttpException(409, "You're not user");
    res.status(200).json({ user: updateUserById });
  } catch (error) {
    next(error);
  }
};

const getIdByToken = (token: string): any => {
  const accessToken = token.split(' ')[1];
  const secret: string = process.env.JWT_SECRET;
  const { _id } = jwt.verify(accessToken, secret) as any;
  return _id;
};
