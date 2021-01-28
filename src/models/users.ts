import { model, Schema, Document } from 'mongoose';
import { User } from '../types/user';

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
    avatar: String,
    cover: {
      type: String,
      default: '/static/images/covers/cover.jpg',
    },
    country: String,
    phone: String,
    firstName: String,
    lastName: String,
    lastLoggedIn: Date,
    bio: String,
    quote: String,
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
