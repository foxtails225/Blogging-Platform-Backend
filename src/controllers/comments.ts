/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response, NextFunction } from 'express';
import { RequestWithUser } from '../types/auth';
import CommentModel from '../models/comments';
import PostModel from '../models/posts';
import FlagModel from '../models/flags';
import NotificationModel from '../models/notification';
import { isEmpty } from '../utils/util';
import { Flag } from '../types/flag';
import { Post } from '../types/post';
import { Comments, CommentsWithPostAndUser } from '../types/comment';

export const getFlagsAll = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  try {
    //@ts-ignore
    const flags: FlagWithUserAndPost[] = await FlagModel.find({ type: 'comment' }).populate('user').populate('post');
    res.status(201).json({ flags });
  } catch (error) {
    next(error);
  }
};

export const getComments = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { user, page, sortBy, limit } = req.body;
  const sort = sortBy ? sortBy : { createdAt: -1 };
  const skip = limit ? limit : 5;
  const current = page ? page : 0;

  try {
    //@ts-ignore
    const comments: CommentsWithPostAndUser[] = await CommentModel.find({ user })
      .populate('user')
      .populate('post')
      .sort(sort)
      .skip(skip * current)
      .limit(skip);

    res.status(201).json({ comments });
  } catch (error) {
    next(error);
  }
};

export const createComment = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const commentData: Comments = req.body;
  const io = req.app.get('socketio');
  io.emit('fetchPost');

  try {
    if (isEmpty(commentData)) return res.status(400).send({ message: 'Comment failed' });

    const response: Comments = await CommentModel.create({ ...commentData, user: _id });
    const parent = commentData.parent ? commentData.parent : response._id;
    const findComment: Comments = await CommentModel.findById(parent);
    const position = findComment.position ? findComment.position + '-' + response._id : response._id + '-' + response._id;
    const comment: Comments = await CommentModel.findByIdAndUpdate(response._id, { parent, position });
    //@ts-ignore
    const findPost: Post = await PostModel.findByIdAndUpdate(commentData.post, { $push: { comments: comment._id } });
    await NotificationModel.create({
      user: findPost.author,
      type: 'new_comment',
      title: `New comment`,
      description: commentData.comment,
      isRead: false,
      url: '/posts/public/' + findPost.slug,
    });
    io.emit('Notify');

    res.status(201).json({ comment });
  } catch (error) {
    next(error);
  }
};

export const updateLikedComment = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { commentId, isLiked } = req.body;

  try {
    const comment: Comments = isLiked
      ? await CommentModel.findByIdAndUpdate(commentId, {
          $push: { 'liked.users': _id },
          $inc: { 'liked.count': 1 },
        })
      : await CommentModel.findByIdAndUpdate(commentId, {
          $pull: { 'liked.users': _id },
          $inc: { 'liked.count': -1 },
        });

    res.status(200).json({ comment });
  } catch (error) {
    next(error);
  }
};

export const createCommentFlag = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const flagData: Flag = req.body;

  try {
    if (isEmpty(flagData)) return res.status(400).send({ message: 'Flag failed' });
    const flag: Flag = await FlagModel.create({ ...flagData, user: _id });
    const comment: Comments = await CommentModel.findByIdAndUpdate(flagData.comment, { $push: { flags: flag._id } });
    const io = req.app.get('socketio');
    io.emit('adminComment');

    res.status(201).json({ comment });
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.query;

  try {
    const findComment: Comments = await CommentModel.findById(_id);
    if (!findComment) return res.status(400).send({ message: 'This comment is not existing.' });
    await PostModel.findByIdAndUpdate(findComment.post, { $pull: { comments: findComment._id } });
    await CommentModel.findByIdAndDelete(findComment._id);
    const io = req.app.get('socketio');
    io.emit('fetchPost');

    res.status(201).json({ data: 'success' });
  } catch (error) {
    next(error);
  }
};
