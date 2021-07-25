import { model, Schema, Document } from 'mongoose';
import { User } from '../types/user';

const { ObjectId, String } = Schema.Types;

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
    stripeId: String,
    code: String,
    banned: Date,
    recoveryToken: String,
    expiredIn: Date,
    registered: Boolean,
    alert: String,
    alertType: {
      type: String,
      enum: ['success', 'info', 'warning', 'error'],
    },
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
    status: {
      type: Boolean,
      default: true,
    },
    reason: {
      type: String,
      required: true,
      default: 'Initial Registration',
    },
    following: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
    followers: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true },
);

const UserModel = model<User & Document>('User', userSchema);

export default UserModel;
