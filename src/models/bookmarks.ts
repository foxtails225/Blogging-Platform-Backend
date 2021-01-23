import { model, Schema, Document } from 'mongoose';
import { Post } from '../types/post';

const { ObjectId } = Schema.Types;

const bookmarkSchema: Schema = new Schema(
  {
    post: {
      type: ObjectId,
      ref: 'Post',
    },
    user: {
      type: ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const BookmarkModel = model<Post & Document>('Bookmark', bookmarkSchema);

export default BookmarkModel;
