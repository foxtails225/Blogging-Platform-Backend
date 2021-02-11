import { User } from './user';

export interface Flag {
  _id?: string;
  comment: string;
  user: string | User;
  createdAt?: Date;
  updatedAt?: Date;
}
