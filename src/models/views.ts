import { model, Schema, Document } from 'mongoose';
import { View } from '../types/view';

const { ObjectId } = Schema.Types;

const viewSchema: Schema = new Schema(
  {
    viewer: String,
    post: {
      type: ObjectId,
      ref: 'Post',
    },
    day: String,
    week: String,
    month: String,
    year: String,
  },
  { timestamps: true },
);

const ViewModel = model<View & Document>('View', viewSchema);

export default ViewModel;
