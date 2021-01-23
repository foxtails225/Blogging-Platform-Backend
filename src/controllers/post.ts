/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { RequestWithUser } from '../types/auth';
import { Post } from '../types/post';
import { User } from '../types/user';
import UserModel from '../models/users';
import PostModel from '../models/posts';
import { isEmpty } from '../utils/util';

const { ObjectId } = Types;

export const getPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const slug: string = req.params.id;

  try {
    const post: Post = await PostModel.findOne({ slug, status: { $nin: ['rejected', 'pending'] } }).populate('author');
    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};

export const getPostsAll = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id, role } = req.user;
  const email = req.body.email as string;
  const page = parseInt(req.body.page as string);
  const limit = 7;

  try {
    //@ts-ignore
    const author: User = await UserModel.findOne({ email });
    const isAuthor = ObjectId(author._id).equals(_id);
    const isAdmin = role === 'admin';
    const search = isAdmin ? {} : isAuthor ? { $ne: 'rejected' } : { $nin: ['rejected', 'pending'] };
    const count = await PostModel.countDocuments({ author: author._id, status: search });
    const posts: Post[] = await PostModel.find({ author: author._id, status: search })
      .populate('author')
      .sort({ createdAt: -1 })
      .skip(limit * page - limit)
      .limit(page);

    res.status(201).json({ posts, isAuthor: isAuthor, pages: Math.ceil(count / limit) });
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const postData: Post = req.body;

  try {
    if (isEmpty(postData)) return res.status(400).send({ message: "You're not postData" });
    const findPosts: Post[] = await PostModel.find({ slug: postData.slug });

    const slug: string = findPosts.length > 0 ? postData.slug + findPosts.length : postData.slug;
    const post: Post = await PostModel.create({ ...postData, slug, author: _id });
    res.status(201).json({ data: post });
  } catch (error) {
    next(error);
  }
};
