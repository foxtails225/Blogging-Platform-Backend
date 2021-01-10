import { model, Schema, Document } from 'mongoose';
import { User } from '../types/user';

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: 'http://www.gravatar.com/avatar/?d=mp',
    },
    firstName: String,
    lastName: String,
    country: String,
    state: String,
    city: String,
    phone: String,
    lastLoggedIn: Date,
    tier: {
      type: String,
      enum: ['premium', 'basic'],
      default: 'basic',
    },
    role: {
      type: String,
      enum: ['admin', 'sub-admin', 'author', 'user'],
      default: 'user',
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const UserModel = model<User & Document>('User', userSchema);

export default UserModel;
