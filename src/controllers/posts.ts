/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import moment from 'moment';
import { RequestWithUser } from '../types/auth';
import { Post } from '../types/post';
import { User } from '../types/user';
import { View } from '../types/view';
import { Bookmark } from '../types/bookmark';
import UserModel from '../models/users';
import PostModel from '../models/posts';
import ViewModel from '../models/views';
import BookmarkModel from '../models/bookmarks';
import { isEmpty } from '../utils/util';

const { ObjectId } = Types;
const day = moment().date();
const week = moment().week();
const month = moment().month();
const year = moment().year();

export const getPost = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // @ts-ignore
  const user: string | null = req.query.user;
  const slug: string = req.params.id;
  const ip: string =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    // @ts-ignore
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  try {
    const findUser: User | null = await UserModel.findById(user);
    const findPost: Post | null = await PostModel.findOne({ slug });
    //@ts-ignore
    const isAuthor = findPost && ObjectId(findPost.author).equals(user);
    const query =
      findUser && (findUser.role === 'admin' || findUser.role === 'sub-admin')
        ? { slug }
        : isAuthor
        ? { slug, status: { $nin: ['rejected'] } }
        : { slug, status: { $nin: ['rejected', 'pending'] } };
    // @ts-ignore
    const post: Post = await PostModel.findOne(query)
      .populate('author')
      .populate({
        path: 'comments',
        populate: { path: 'flags' },
      })
      .populate({
        path: 'comments',
        populate: { path: 'user' },
        options: { sort: { position: 1, depth: 1, createdAt: 1 } },
      });
    if (!post) return res.status(400).send({ message: 'post is not exist.' });
    const findView: View = await ViewModel.findOne({ viewer: ip, post: post._id });
    const findBookmark: Bookmark = user && (await BookmarkModel.findOne({ post: post._id, user: user }));

    if (user && !post.viewers.includes(ip)) {
      //@ts-ignore
      !findView && (await ViewModel.create({ viewer: ip, post: post._id, day, week, month, year }));
      await PostModel.findOneAndUpdate({ slug, status: { $nin: ['rejected', 'pending'] } }, { $push: { viewers: ip } });
    }

    res.status(200).json({ post, isBookmark: Boolean(findBookmark) });
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const _id: string = req.params.id;

  try {
    const findPost: Post | null = await PostModel.findOne({ _id }).populate('author');
    if (!findPost) return res.status(400).send({ message: 'post is not exist.' });
    res.status(200).json({ post: findPost });
  } catch (error) {
    next(error);
  }
};

export const getStockPosts = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { id } = req.params;
  const limit = 7;

  try {
    //@ts-ignore
    const posts: Post[] = await PostModel.aggregate([
      { $match: { tags: { $elemMatch: { symbol: id } }, status: { $nin: ['rejected', 'pending'] } } },
      { $lookup: { from: 'users', localField: 'author', foreignField: '_id', as: 'author' } },
      { $unwind: { path: '$author', preserveNullAndEmptyArrays: true } },
      { $sort: { createdAt: -1 } },
      { $skip: limit * 1 - limit },
      { $limit: limit },
    ]);
    res.status(201).json({ posts });
  } catch (error) {
    next(error);
  }
};

export const getPostsAll = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id, role } = req.user;
  const { email, page, sortBy, limit } = req.body;
  const sort = sortBy ? sortBy : { createdAt: -1 };
  const skip = limit ? limit : 7;
  const isAdmin = role === 'admin';

  try {
    //@ts-ignore
    const author: User = await UserModel.findOne({ email });
    const isAuthor = ObjectId(author._id).equals(_id);
    const search: any = isAuthor ? { $ne: 'rejected' } : { $nin: ['rejected', 'pending'] };
    const match = isAdmin ? { author: author._id } : { author: author._id, status: search };
    const count = await PostModel.countDocuments(match);
    const posts: Post[] = await PostModel.aggregate([
      { $match: match },
      { $addFields: { tags_count: { $size: '$tags' } } },
      { $lookup: { from: 'users', localField: 'author', foreignField: '_id', as: 'author' } },
      { $unwind: { path: '$author', preserveNullAndEmptyArrays: true } },
      { $lookup: { from: 'comments', localField: 'comments', foreignField: '_id', as: 'comments' } },
      { $sort: Object.keys(sort).includes('tags') ? { tags_count: Object.values(sort)[0] } : sort },
      { $skip: skip * (page + 1) - skip },
      { $limit: skip },
    ]);

    res.status(201).json({ posts, isAuthor: isAuthor, count });
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
    const post: Post = await PostModel.create({ ...postData, slug, author: _id, day, week, month, year });
    const io = req.app.get('socketio');
    io.emit('adminPost');

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

export const updateStatus = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const PostData = req.body;

  try {
    const post: Post = await PostModel.findByIdAndUpdate(PostData._id, PostData);
    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};
