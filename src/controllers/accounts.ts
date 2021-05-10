import { NextFunction, Response } from 'express';
import bcrypt from 'bcrypt';
import moment from 'moment';
import { User } from '../types/user';
import { RequestWithUser } from '../types/auth';
import UserModel from '../models/users';
import PostModel from '../models/posts';
import { isEmpty } from '../utils/util';

export const getInfo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;

  try {
    const findUser: User = await UserModel.findById(_id);
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

export const getFollowing = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { page, limit } = req.body;
  const skip = limit ? limit : 5;

  try {
    const findUser: User = await UserModel.findOne({ _id }, { _id: 0 });
    if (!findUser) return res.status(409).send({ message: "You're not user" });
    const findAuthors = await UserModel.aggregate([
      { $match: { _id } },
      { $addFields: { count: { $size: '$following' } } },
      { $lookup: { from: 'users', localField: 'following', foreignField: '_id', as: 'following' } },
      { $project: { following: { $slice: ['$following', skip * page, limit] }, count: -1 } },
    ]);

    const users = findAuthors.length > 0 && findAuthors[0]?.following;
    const count = findAuthors.length > 0 && findAuthors[0]?.count;

    res.status(200).json({ users: users ?? [], count: count ?? 0 });
  } catch (error) {
    next(error);
  }
};

export const getFollowers = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { page, limit } = req.body;
  const skip = limit ? limit : 5;

  try {
    const findUser: User = await UserModel.findOne({ _id }, { _id: 0 });
    if (!findUser) return res.status(409).send({ message: "You're not user" });
    const findAuthors = await UserModel.aggregate([
      { $match: { _id } },
      { $addFields: { count: { $size: '$followers' } } },
      { $lookup: { from: 'users', localField: 'followers', foreignField: '_id', as: 'followers' } },
      { $project: { followers: { $slice: ['$followers', skip * page, limit] }, count: -1 } },
    ]);

    const users = findAuthors.length > 0 && findAuthors[0]?.followers;
    const count = findAuthors.length > 0 && findAuthors[0]?.count;

    res.status(200).json({ users: users ?? [], count: count ?? 0 });
  } catch (error) {
    next(error);
  }
};

export const getStatistics = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const match = { author: _id, status: { $ne: 'rejected' } };
  const dates = {
    day: moment().date(),
    week: moment().week(),
    month: moment().month(),
    year: moment().year(),
  };

  Object.values(req.query).map((item: string) => {
    const value = Object.keys(dates).find((el: string) => el === item);
    match[item] = dates[value];
  });

  try {
    const findUser: User = await UserModel.findOne({ _id }, { _id: 0 });
    if (!findUser) return res.status(409).send({ message: "You're not user" });
    const posts = await PostModel.aggregate([
      { $match: match },
      { $project: { comments_count: { $size: '$viewers' }, liked_count: { $size: '$liked.users' } } },
      { $group: { _id: null, viewers: { $sum: '$comments_count' }, likes: { $sum: '$liked_count' } } },
    ]);
    const data = posts.length > 0 ? posts[0] : { viewers: 0, likes: 0 };

    res.status(200).json({ data: data });
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

export const updateFollowers = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { userId, isFollow } = req.body;
  let user: User;

  try {
    const findUser: User = await UserModel.findOne({ _id });
    if (!findUser || !userId) return res.status(401).send({ message: "You're not user" });

    if (!isFollow) {
      user = await UserModel.findByIdAndUpdate(userId, { $addToSet: { followers: _id } });
      await UserModel.findByIdAndUpdate(_id, { $addToSet: { following: userId } });
    } else {
      user = await UserModel.findByIdAndUpdate(userId, { $pull: { followers: _id } });
      await UserModel.findByIdAndUpdate(_id, { $pull: { following: userId } });
    }

    if (!user) return res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
