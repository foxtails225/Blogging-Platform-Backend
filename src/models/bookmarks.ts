import { model, Schema, Document } from 'mongoose';
import { Bookmark } from '../types/bookmark';

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

const BookmarkModel = model<Bookmark & Document>('Bookmark', bookmarkSchema);

export default BookmarkModel;
