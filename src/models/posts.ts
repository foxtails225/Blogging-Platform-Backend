import { model, Schema, Document } from 'mongoose';
import { Post } from '../types/post';

const { ObjectId, String, Number } = Schema.Types;

const postSchema: Schema = new Schema(
  {
    author: {
      type: ObjectId,
      ref: 'User',
    },
    slug: {
      type: String,
      unique: true,
    },
    title: String,
    content: String,
    disclosure: String,
    tags: [
      {
        symbol: String,
        securityName: String,
        main: {
          type: Boolean,
          default: false,
        },
      },
    ],
    viewers: [
      {
        type: String,
      },
    ],
    liked: {
      count: {
        type: Number,
        default: 0,
      },
      users: [
        {
          type: ObjectId,
          ref: 'User',
        },
      ],
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    reason: {
      type: String,
      required: true,
      default: 'Initial Post',
    },
    comments: [
      {
        type: ObjectId,
        ref: 'Comment',
      },
    ],
    flags: [
      {
        type: ObjectId,
        ref: 'Flag',
      },
    ],
    picker: {
      type: String,
      enum: ['bullish', 'bearish', 'neutral', 'no_opinion'],
      default: 'bullish',
    },
    day: Number,
    week: Number,
    month: Number,
    year: Number,
  },
  { timestamps: true },
);

const PostModel = model<Post & Document>('Post', postSchema);

export default PostModel;
