import { model, Schema, Document } from 'mongoose';
import { Post } from '../types/post';

const { ObjectId, String, Number } = Schema.Types;

const postSchema: Schema = new Schema(
  {
    author: {
      type: ObjectId,
      ref: 'User',
    },
    slug: String,
    title: String,
    content: String,
    disclosure: String,
    tags: [
      {
        symbol: String,
        name: String,
      },
    ],
    viewers: [
      {
        type: ObjectId,
        ref: 'User',
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
    week: Number,
    month: Number,
    year: Number,
  },
  { timestamps: true },
);

const PostModel = model<Post & Document>('Post', postSchema);

export default PostModel;
