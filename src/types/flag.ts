import { Post } from './post';
import { User } from './user';

export interface Flag {
  _id?: string;
  post?: string | Post;
  comment?: string;
  user: string | User;
  reason: string;
  description: string;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
}
