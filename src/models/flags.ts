import { model, Schema, Document } from 'mongoose';
import { Flag } from '../types/flag';

const { ObjectId } = Schema.Types;

const flagSchema: Schema = new Schema(
  {
    post: {
      type: ObjectId,
      ref: 'Post',
    },
    comment: {
      type: ObjectId,
      ref: 'Comment',
    },
    user: {
      type: ObjectId,
      ref: 'User',
    },
    type: {
      type: String,
      enum: ['post', 'comment'],
    },
    reason: String,
  },
  { timestamps: true },
);

const FlagModel = model<Flag & Document>('Flag', flagSchema);

export default FlagModel;
