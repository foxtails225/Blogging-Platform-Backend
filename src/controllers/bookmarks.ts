import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../types/auth';
import BookmarkModel from '../models/bookmarks';

export const getBookmarksAll = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const page = parseInt(req.query.page as string);
  const limit = 7;

  try {
    const count = await BookmarkModel.countDocuments({ author: _id });
    const posts = await BookmarkModel.find({ user: _id })
      .populate({ path: 'post', populate: { path: 'author' } })
      .sort({ createdAt: -1 })
      .skip(limit * page - limit)
      .limit(page);

    res.status(201).json({ posts, pages: Math.ceil(count / limit) });
  } catch (error) {
    next(error);
  }
};

// export const createPost = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
//   const { _id } = req.user;

//   try {
//     if (isEmpty(postData)) return res.status(400).send({ message: "You're not postData" });
//     const findPosts: Post[] = await PostModel.find({ slug: postData.slug });

//     const slug: string = findPosts.length > 0 ? postData.slug + findPosts.length : postData.slug;
//     const post: Post = await PostModel.create({ ...postData, slug, author: _id });
//     res.status(201).json({ data: post });
//   } catch (error) {
//     next(error);
//   }
// };
