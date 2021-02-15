import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { DataStoredInToken, RequestWithUser } from '../types/auth';
import userModel from '../models/users';

const adminMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (authorization) {
      const secret = process.env.JWT_SECRET;
      const verificationResponse = (await jwt.verify(authorization.split(' ')[1], secret)) as DataStoredInToken;
      const userId = verificationResponse._id;
      const findUser = await userModel.findOne({ _id: userId, $or: [{ role: 'admin' }, { role: 'sub-admin' }] });

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(res.status(401).send('Wrong authentication token'));
      }
    } else {
      next(res.status(401).send('Authentication token missing'));
    }
  } catch (error) {
    next(res.status(401).send('Wrong authentication token'));
  }
};

export default adminMiddleware;
