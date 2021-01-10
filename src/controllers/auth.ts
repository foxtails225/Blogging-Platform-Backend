/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../types/user';
import { RequestWithUser, DataStoredInToken, TokenData } from '../types/auth';
import HttpException from '../exceptions/HttpException';
import UserModel from '../models/users';
import { isEmpty } from '../utils/util';

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userData: CreateUserDto = req.body;

  try {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
    const findUser: User = await UserModel.findOne({ email: userData.email });

    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    //@ts-ignore
    const user: User = await UserModel.create({ ...userData, password: hashedPassword });
    const accessToken: string = createToken(user).token;

    res.status(201).json({ user, accessToken });
  } catch (error) {
    next(error);
  }
};

export const logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userData: CreateUserDto = req.body;

  try {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
    const findUser: User = await UserModel.findOneAndUpdate({ email: userData.email }, { lastLoggedIn: userData.lastLoggedIn });

    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);
    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);

    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");
    const TokenData: TokenData = createToken(findUser);
    const cookie: string = createCookie(TokenData);
    res.setHeader('Set-Cookie', [cookie]);
    res.status(200).json({ user: findUser, accessToken: TokenData.token });
  } catch (error) {
    next(error);
  }
};

export const logOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const userData: User = req.user;

  try {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await UserModel.findOne({ password: userData.password });
    if (!findUser) throw new HttpException(409, "You're not user");
    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    res.status(200).json({ data: findUser });
  } catch (error) {
    next(error);
  }
};

export const createToken = (user: User): TokenData => {
  const dataStoredInToken: DataStoredInToken = { _id: user._id };
  const secret: string = process.env.JWT_SECRET;
  const expiresIn: number = 60 * 60;

  return { expiresIn, token: jwt.sign(dataStoredInToken, secret, { expiresIn }) };
};

export const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
};
