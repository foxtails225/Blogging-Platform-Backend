/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';
import moment from 'moment';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../types/user';
import { RequestWithUser, DataStoredInToken, TokenData } from '../types/auth';
import UserModel from '../models/users';
import { isEmpty } from '../utils/util';
import { sendEmail } from '../services/aws-ses';

const { BASE_URL } = process.env;

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const userData: CreateUserDto = req.body;
  const sender = 'autoreplygang@dankstocks.com';
  const code = crypto.randomInt(0, 1000000).toString().padStart(6, '0');
  //@ts-ignore
  const expiredIn: Date = moment().add(1, 'hour');

  try {
    if (isEmpty(userData)) return res.status(400).send({ message: "You're not userData" });
    const findUser: User = await UserModel.findOne({ email: userData.email });

    if (findUser) return res.status(409).send({ message: `You're email ${userData.email} already exists` });
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user: User = await UserModel.create({ ...userData, password: hashedPassword, expiredIn, code, registered: false });
    const data = `Your verification code for dankstocks.com is ${code}`;
    sendEmail(sender, userData.email, 'Verify Code', data);

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

export const logIn = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const userData: CreateUserDto = req.body;

  try {
    if (isEmpty(userData)) return res.status(400).send({ message: "You're not userData" });
    const findUser: User = await UserModel.findOneAndUpdate(
      { email: userData.email, status: true, registered: true },
      { lastLoggedIn: userData.lastLoggedIn },
    );

    if (!findUser) return res.status(409).send({ message: `You're email ${userData.email} not found` });
    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);

    if (!isPasswordMatching) return res.status(409).send({ message: "You're password not matching" });
    const TokenData: TokenData = createToken(findUser);
    const cookie: string = createCookie(TokenData);
    //@ts-ignore
    res.setHeader('Set-Cookie', [cookie]);
    res.status(200).json({ user: findUser, accessToken: TokenData.token });
  } catch (error) {
    next(error);
  }
};

export const verifyCode = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { email, code } = req.body;
  const today = moment().toDate();

  try {
    if (!email || !code) return res.status(400).send({ message: "You're not userData" });
    const findUser: User = await UserModel.findOne({ email });

    if (!findUser) return res.status(409).send({ message: `You're email ${email} not existing.` });
    const user: User = await UserModel.findOneAndUpdate({ email, code, expiredIn: { $gte: today } }, { registered: true });

    if (!user) return res.status(409).send({ message: `Verification code expired.` });
    const accessToken: string = createToken(user).token;
    const io = req.app.get('socketio');
    io.emit('adminUser');

    res.status(201).json({ user, accessToken });
  } catch (error) {
    next(error);
  }
};

export const recoveryLink = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { email } = req.body;
  const sender = 'autoreplygang@dankstocks.com';
  //@ts-ignore
  const expiredIn: Date = moment().add(1, 'hour');

  try {
    const findUser: User = await UserModel.findOne({ email });
    if (!findUser) return res.status(409).send({ message: `Email ${email} is not existing.` });

    const recoveryToken: string = createToken(findUser).token;
    const user: User = await UserModel.findByIdAndUpdate(findUser._id, { recoveryToken, expiredIn });
    const recoveryUrl = `${BASE_URL}/password-reset/recovery_token=${recoveryToken}`;
    const data = `Dankstocks.com passowrd recovery link is <a href=${recoveryUrl}>${recoveryUrl}</a>`;
    sendEmail(sender, email, 'Password Reset Link', data);

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { recoveryToken, password } = req.body;
  const today = moment().toDate();

  try {
    const findUser: User = await UserModel.findOne({ recoveryToken, expiredIn: { $gte: today } });
    if (!findUser) return res.status(409).send({ message: "You're not user" });
    const hashedPassword = await bcrypt.hash(password, 10);
    //@ts-ignore
    const user: User = await UserModel.findByIdAndUpdate(findUser._id, { password: hashedPassword });
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export const resendCode = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { email } = req.body;
  const sender = 'autoreplygang@dankstocks.com';
  const code = crypto.randomInt(0, 1000000).toString().padStart(6, '0');
  //@ts-ignore
  const expiredIn: Date = moment().add(1, 'hour');

  try {
    const user: User = await UserModel.findOneAndUpdate({ email }, { code, expiredIn });
    if (!user) return res.status(409).send({ message: `Email ${email} is not existing.` });
    sendEmail(sender, email, 'Verify Code', code);

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

export const logOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const userData: User = req.user;

  try {
    if (isEmpty(userData)) return res.status(400).send({ message: "You're not userData" });
    const findUser: User = await UserModel.findOne({ password: userData.password });

    if (!findUser) return res.status(409).send({ message: "You're not user" });
    //@ts-ignore
    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    res.status(200).json({ data: findUser });
  } catch (error) {
    next(error);
  }
};

export const createToken = (user: User): TokenData => {
  const dataStoredInToken: DataStoredInToken = { _id: user._id };
  //@ts-ignore
  const secret: string = process.env.JWT_SECRET;
  const expiresIn: number = 60 * 60 * 24;

  return { expiresIn, token: jwt.sign(dataStoredInToken, secret, { expiresIn }) };
};

export const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
};
