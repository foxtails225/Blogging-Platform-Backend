import { User } from './user';

export interface Reply {
  _id?: string;
  parent: string;
  commentId: string;
  user: string;
  comment: string;
  depth: number;
  createdAt: Date;
}

export interface Comments {
  _id?: string;
  slug: string;
  post: string;
  user: string | User;
  reply?: Reply[];
  comment: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
