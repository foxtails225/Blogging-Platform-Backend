/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response, NextFunction } from 'express';
import { RequestWithUser } from '../types/auth';
import { Comments, Reply } from '../types/comment';
import CommentModel from '../models/comments';
import { isEmpty } from '../utils/util';

export const createComment = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const commentData: Comments = req.body;

  try {
    if (isEmpty(commentData)) return res.status(400).send({ message: 'Comment failed' });
    const comment: Comments = await CommentModel.create({ ...commentData, user: _id });

    res.status(201).json({ comment });
  } catch (error) {
    next(error);
  }
};

export const createReply = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const replyData: Reply = req.body;

  try {
    if (isEmpty(replyData)) return res.status(400).send({ message: 'Reply failed' });
    const comment: Comment = await CommentModel.findByIdAndUpdate(replyData.commentId, {
      //@ts-ignore
      $push: { reply: { ...replyData, user: _id, createdAt: new Date() } },
    });

    res.status(201).json({ comment });
  } catch (error) {
    next(error);
  }
};
