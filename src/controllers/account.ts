import { NextFunction, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../types/user';
import { RequestWithUser } from '../types/auth';
import UserModel from '../models/users';
import PostModel from '../models/posts';
import { isEmpty } from '../utils/util';

export const getInfo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;

  try {
    const findUser: User = await UserModel.findOne({ _id }, { _id: 0 });
    if (!findUser) return res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user: findUser });
  } catch (error) {
    next(error);
  }
};

export const getStatus = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;

  try {
    const findUser: User = await UserModel.findOne({ _id }, { _id: 0 });
    if (!findUser) return res.status(409).send({ message: "You're not user" });

    const published = await PostModel.countDocuments({ author: _id, status: 'approved' });
    const pending = await PostModel.countDocuments({ author: _id, status: 'pending' });
    const comments = 0;
    const tags = 0;
    const status = { published, pending, comments, tags };

    res.status(200).json({ status });
  } catch (error) {
    next(error);
  }
};

export const updateInfo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { userData } = req.body;

  try {
    const findUser: User = await UserModel.findOne({ _id }, { _id: 0 });
    if (!findUser) return res.status(401).send({ message: "You're not user" });
    if (isEmpty(userData)) return res.status(400).send({ message: "You're not userData" });

    const user: User = await UserModel.findByIdAndUpdate(_id, { ...userData });
    if (!user) return res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export const updatePassword = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { userData } = req.body;

  try {
    const findUser: User = await UserModel.findOne({ _id });
    if (!findUser) return res.status(401).send({ message: "You're not user" });
    if (isEmpty(userData)) return res.status(400).send({ message: "You're not userData" });

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user: User = await UserModel.findByIdAndUpdate(_id, { password: hashedPassword });
    if (!user) return res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
