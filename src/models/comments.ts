import { model, Schema, Document } from 'mongoose';
import { Comments } from '../types/comment';

const { ObjectId } = Schema.Types;

const commentSchema: Schema = new Schema(
  {
    parent: {
      type: ObjectId,
      ref: 'Comment',
    },
    post: {
      type: ObjectId,
      ref: 'Post',
    },
    user: {
      type: ObjectId,
      ref: 'User',
    },
    depth: {
      type: Number,
      default: 0,
    },
    position: String,
    comment: String,
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
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const CommentModel = model<Comments & Document>('Comment', commentSchema);

export default CommentModel;
