/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response, NextFunction } from 'express';
import { RequestWithUser } from '../types/auth';
import { Comments } from '../types/comment';
import CommentModel from '../models/comments';
import { isEmpty } from '../utils/util';
import PostModel from '../models/posts';

export const createComment = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const commentData: Comments = req.body;

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
