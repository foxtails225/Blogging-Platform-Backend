import { model, Schema, Document } from 'mongoose';
import { View } from '../types/views';

const viewsSchema: Schema = new Schema(
  {
    viewer: String,
    day: Number,
    week: Number,
    month: Number,
    year: Number,
  },
  { timestamps: true },
);

const ViewsModel = model<View & Document>('Views', viewsSchema);

export default ViewsModel;
