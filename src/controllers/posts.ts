/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import moment from 'moment';
import { RequestWithUser } from '../types/auth';
import { Post } from '../types/post';
import { User } from '../types/user';
import { Bookmark } from '../types/bookmark';
import { Comments } from '../types/comment';
import UserModel from '../models/users';
import PostModel from '../models/posts';
import ViewsModel from '../models/views';
import CommentModel from '../models/comments';
import BookmarkModel from '../models/bookmarks';
import { isEmpty } from '../utils/util';

const { ObjectId } = Types;

export const getPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // @ts-ignore
  const user: string | null = req.query.user;
  const slug: string = req.params.id;
  const day = moment().day();
  const week = moment().week();
  const month = moment().month();
  const year = moment().year();
  const ip: string =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    //@ts-ignore
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  try {
    const post: Post = await PostModel.findOne({ slug, status: { $nin: ['rejected', 'pending'] } }).populate('author');
    const comments: Comments[] = await CommentModel.find({ post: post._id })
      .populate('user')
      .populate({ path: 'reply.user', populate: { path: 'user' } });

    if (user && !post.viewers.includes(ip)) {
      // @ts-ignore
      await ViewsModel.create({ viewer: ip, day, week, month, year });
      await PostModel.findOneAndUpdate({ slug, status: { $nin: ['rejected', 'pending'] } }, { $push: { viewers: ip } });
    }
    const bookmark: Bookmark = user && post && (await BookmarkModel.findOne({ post: post._id, user: user }));

    res.status(200).json({ post, comments, isBookmark: Boolean(bookmark) });
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
  const week = moment().week();
  const month = moment().month();
  const year = moment().year();

  try {
    if (isEmpty(postData)) return res.status(400).send({ message: "You're not postData" });
    const findPosts: Post[] = await PostModel.find({ slug: postData.slug });
    const slug: string = findPosts.length > 0 ? postData.slug + findPosts.length : postData.slug;
    const post: Post = await PostModel.create({ ...postData, slug, author: _id, week, month, year });

    res.status(201).json({ data: post });
  } catch (error) {
    next(error);
  }
};

export const updateLikedPost = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { postId, isLiked } = req.body;

  try {
    const post: Post = isLiked
      ? await PostModel.findByIdAndUpdate(postId, {
          $push: { 'liked.users': _id },
          $inc: { 'liked.count': 1 },
        })
      : await PostModel.findByIdAndUpdate(postId, {
          $pull: { 'liked.users': _id },
          $inc: { 'liked.count': -1 },
        });

    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};
