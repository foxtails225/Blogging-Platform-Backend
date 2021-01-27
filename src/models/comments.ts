import { model, Schema, Document } from 'mongoose';
import { Comments } from '../types/comment';

const { ObjectId } = Schema.Types;

const commentSchema: Schema = new Schema(
  {
    slug: String,
    post: {
      type: ObjectId,
      ref: 'Post',
    },
    user: {
      type: ObjectId,
      ref: 'User',
    },
    reply: [
      {
        parent: {
          type: ObjectId,
          ref: 'Comment',
        },
        commentId: {
          type: ObjectId,
          ref: 'Post',
        },
        user: {
          type: ObjectId,
          ref: 'User',
        },
        comment: String,
        depth: Number,
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
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
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
