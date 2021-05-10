import { Request, Response, NextFunction } from 'express';
import PostModel from '../models/posts';
import UserModel from '../models/users';
import { Post } from '../types/post';

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
    const users: Post[] = await UserModel.find({ role: { $ne: 'admin' } })
      .sort(sort)
      .skip(skip * page)
      .limit(skip);

    res.status(200).json({ users, count });
  } catch (error) {
    next(error);
  }
};
