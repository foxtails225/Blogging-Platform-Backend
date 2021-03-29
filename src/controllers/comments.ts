/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response, NextFunction } from 'express';
import { RequestWithUser } from '../types/auth';
import { Comments } from '../types/comment';
import CommentModel from '../models/comments';
import PostModel from '../models/posts';
import FlagModel from '../models/flags';
import { isEmpty } from '../utils/util';
import { Flag } from '../types/flag';

export const getFlagsAll = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  try {
    //@ts-ignore
    const flags: Flag[] = await FlagModel.find({ type: 'comment' }).populate('user');
    res.status(201).json({ flags });
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
    await PostModel.findByIdAndUpdate(commentData.post, { $push: { comments: comment._id } });

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
