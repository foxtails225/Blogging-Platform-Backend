import { User } from './user';

export interface Flag {
  _id?: string;
  post?: string;
  comment?: string;
  user: string | User;
  reason: string;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
}
