import { Flag } from './flag';
import { User } from './user';

export interface Comments {
  _id?: string;
  parent: string;
  post: string;
  user: string | User;
  depth?: number;
  position: string;
  liked?: {
    count: number;
    users: string[] | User[];
  };
  comment: string;
  flags: string[] | Flag[];
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
