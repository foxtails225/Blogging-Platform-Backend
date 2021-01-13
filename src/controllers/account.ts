import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../types/user';
import UserModel from '../models/users';
import { isEmpty } from '../utils/util';

export const getInfo = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send({ message: 'Authorization token missing' });

  try {
    const userId = getIdByToken(authorization);
    if (!userId) return res.status(401).send({ message: 'jwt expired' });

    const findUser: User = await UserModel.findOne({ _id: userId });
    if (!findUser) return res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user: findUser });
  } catch (error) {
    next(error);
  }
};

export const updateInfo = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { authorization } = req.headers;
  const { userData } = req.body;

  try {
    const userId = getIdByToken(authorization);
    if (!userId) return res.status(401).send({ message: 'jwt expired' });

    const findUser: User = await UserModel.findOne({ _id: userId });
    if (!findUser) return res.status(401).send({ message: "You're not user" });
    if (isEmpty(userData)) return res.status(400).send({ message: "You're not userData" });

    const updateUserById: User = await UserModel.findByIdAndUpdate(userId, { ...userData });
    if (!updateUserById) return res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user: updateUserById });
  } catch (error) {
    next(error);
  }
};

export const updatePassword = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { authorization } = req.headers;
  const { userData } = req.body;
  if (!authorization) return res.status(401).send({ message: 'Authorization token missing' });

  try {
    const userId = getIdByToken(authorization);
    if (!userId) res.status(401).send({ message: 'jwt expired' });

    const findUser: User = await UserModel.findOne({ _id: userId });
    if (!findUser) return res.status(401).send({ message: "You're not user" });
    isEmpty(userData) && res.status(400).send({ message: "You're not userData" });

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user: User = await UserModel.findByIdAndUpdate(userId, { password: hashedPassword });
    if (!user) return res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const getIdByToken = (token: string): any => {
  const accessToken = token.split(' ')[1];
  const secret: string = process.env.JWT_SECRET;
  try {
    const { _id } = jwt.verify(accessToken, secret) as any;
    return _id;
  } catch (err: any) {
    return null;
  }
};
