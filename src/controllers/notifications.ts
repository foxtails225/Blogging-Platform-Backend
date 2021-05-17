/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response, NextFunction } from 'express';
import { RequestWithUser } from '../types/auth';
import NotificationModel from '../models/notification';
import { Notification } from '../types/notification';
import moment from 'moment';

export const getTopNotifications = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;

  try {
    const notifications: Notification[] = await NotificationModel.find({ user: _id }).limit(7).sort({ createdAt: -1 });
    const count: number = await NotificationModel.count({ user: _id, isRead: false });
    res.status(201).json({ notifications, count });
  } catch (error) {
    next(error);
  }
};

export const getNotifications = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const { id } = req.params;
  const { limit, page } = req.body;
  const start = moment().startOf('day');
  const end = moment().endOf('day');

  try {
    const match =
      id === 'today'
        ? { user: _id, createdAt: { $gte: start, $lt: end } }
        : { user: _id, createdAt: { $not: { $gte: start, $lt: end } } };
    //@ts-ignore
    const notifications: Notification[] = await NotificationModel.find(match)
      .sort({ createdAt: -1 })
      .skip(limit * page)
      .limit(limit);
    //@ts-ignore
    const count: number = await NotificationModel.count({ user: _id, createdAt: { $not: { $gte: start, $lt: end } } });
    res.status(201).json({ notifications, count });
  } catch (error) {
    next(error);
  }
};

export const createNotification = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const notificationData: Notification = req.body;
  const io = req.app.get('socketio');

  try {
    const notification: Notification = await NotificationModel.create(notificationData);
    io.emit('Notify');

    res.status(200).json({ notification });
  } catch (error) {
    next(error);
  }
};

export const updateRead = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { id } = req.params;
  const io = req.app.get('socketio');

  try {
    const notification: Notification = await NotificationModel.findByIdAndUpdate(id, { isRead: true });
    io.emit('Notify');

    res.status(200).json({ notification });
  } catch (error) {
    next(error);
  }
};

export const updateReadAll = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<any> => {
  const { _id } = req.user;
  const io = req.app.get('socketio');

  try {
    //@ts-ignore
    const notification: Notification = await NotificationModel.updateMany({ user: _id }, { isRead: true });
    io.emit('Notify');

    res.status(200).json({ notification });
  } catch (error) {
    next(error);
  }
};
