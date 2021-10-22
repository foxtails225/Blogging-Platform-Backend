/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import { User } from '../types/user';
import UserModel from '../models/users';
import PostModel from '../models/posts';
import { RequestWithUser } from '../types/auth';
import { sendTemplateEmail } from '../services/aws-ses';

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

export const getTopAuthors = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { page, limit } = req.body;
  const skip = limit ? limit : 5;

  try {
    const users = await PostModel.aggregate([
      { $unwind: '$liked.users' },
      { $group: { _id: '$author', likes: { $sum: 1 } } },
      { $sort: { likes: -1 } },
      { $skip: skip * page },
      { $limit: skip },
      { $project: { _id: 1 } },
      { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'author' } },
      { $unwind: { path: '$author', preserveNullAndEmptyArrays: true } },
    ]);

    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

export const updateAvatar = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const userData = req.body;

  try {
    const user: User = await UserModel.findByIdAndUpdate(userData._id, userData);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export const updateStatus = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const userData = req.body;
  const today = moment().toDate();
  const sender = 'autoreplygang@dankstocks.com';
  const summary = 'Your suspension has ended!';

  try {
    const user: User = await UserModel.findByIdAndUpdate(userData._id, userData);
    if (userData?.banned) {
      const period = `${today} - ${user.banned}`;
      const reason = `You has been suspended because ${user.reason}`;
      const data = `{ \"name\":\"${user.name}\", \"summary\":\"${summary}\", \"period\":\"${period}\", \"reason\":\"${reason}\" }`;
      sendTemplateEmail(sender, user.email, 'account_banned', data);
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
