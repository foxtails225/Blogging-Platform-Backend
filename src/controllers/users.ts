/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../types/user';
import UserModel from '../models/users';
import { isEmpty } from '../utils/util';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users: User[] = await UserModel.find();
    res.status(200).json({ data: users });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const userId: string = req.params.id;

  try {
    const findUser: User = await UserModel.findOne({ _id: userId });
    !findUser && res.status(409).send({ message: "You're not user" });
    res.status(200).json({ user: findUser });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData: CreateUserDto = req.body;

  try {
    isEmpty(userData) && res.status(400).send({ message: "You're not userData" });

    const findUser: User = await UserModel.findOne({ email: userData.email });
    findUser && res.status(409).send({ message: `You're email ${userData.email} already exists` });

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    // @ts-ignore
    const user: User = await UserModel.create({ ...userData, password: hashedPassword });
    res.status(201).json({ data: user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId: string = req.params.id;
  const userData: User = req.body;

  try {
    isEmpty(userData) && res.status(400).send({ message: "You're not userData" });

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user: User = await UserModel.findByIdAndUpdate(userId, { ...userData, password: hashedPassword });
    !user && res.status(409).send({ message: "You're not user" });
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId: string = req.params.id;

  try {
    const user: User = await UserModel.findByIdAndDelete(userId);
    !user && res.status(409).send({ message: "You're not user" });
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};
