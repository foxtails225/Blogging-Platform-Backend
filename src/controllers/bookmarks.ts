/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../types/auth';
import BookmarkModel from '../models/bookmarks';
import { Bookmark } from '../types/bookmark';

export const getBookmark = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { postId } = req.query;

  try {
    //@ts-ignore
    const bookmark: Bookmark = await BookmarkModel.findOne({ post: postId, user: _id });
    if (!bookmark) return res.status(400).send({ message: 'Bookmark is not exist.' });
    res.status(201).json({ bookmark });
  } catch (error) {
    next(error);
  }
};

export const getBookmarksAll = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const page = parseInt(req.query.page as string);
  const limit = 7;

  try {
    const count = await BookmarkModel.countDocuments({ user: _id, archived: false });
    const bookmarks = await BookmarkModel.find({ user: _id, archived: false })
      .populate({ path: 'post', populate: { path: 'author' } })
      .sort({ createdAt: -1 })
      .skip(limit * page - limit)
      .limit(page);

    res.status(201).json({ bookmarks, pages: Math.ceil(count / limit) });
  } catch (error) {
    next(error);
  }
};

export const getArchivedBookmarks = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const page = parseInt(req.query.page as string);
  const limit = 7;

  try {
    const count = await BookmarkModel.countDocuments({ user: _id, archived: true });
    const bookmarks = await BookmarkModel.find({ user: _id, archived: true })
      .populate({ path: 'post', populate: { path: 'author' } })
      .sort({ createdAt: -1 })
      .skip(limit * page - limit)
      .limit(page);

    res.status(201).json({ bookmarks, pages: Math.ceil(count / limit) });
  } catch (error) {
    next(error);
  }
};

export const updateArchivedBookmark = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { postId, isArchived } = req.body;

  try {
    const findBookmark: Bookmark = await BookmarkModel.findOne({ post: postId, user: _id });
    if (!findBookmark) return res.status(400).send({ message: 'Bookmark is not exist.' });
    //@ts-ignore
    const bookmark: Bookmark = await BookmarkModel.findOneAndUpdate({ post: postId, user: _id }, { archived: isArchived });
    res.status(201).json({ bookmark });
  } catch (error) {
    next(error);
  }
};

export const createBookmark = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { postId } = req.body;

  try {
    const findBookmark: Bookmark = await BookmarkModel.findOne({ post: postId, user: _id });
    if (findBookmark) return res.status(201).json({ bookmark: findBookmark });
    //@ts-ignore
    const bookmark: Bookmark = await BookmarkModel.create({ post: postId, user: _id });
    res.status(201).json({ bookmark });
  } catch (error) {
    next(error);
  }
};

export const deleteBookmark = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { postId } = req.body;

  try {
    await BookmarkModel.deleteOne({ post: postId, user: _id });
    res.status(201).json({ message: 'bookmark removed' });
  } catch (error) {
    next(error);
  }
};
