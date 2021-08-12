import { model, Schema, Document } from 'mongoose';
import { Search } from '../types/search';

const searchSchema: Schema = new Schema(
  {
    symbol: String,
    count: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true },
);

const SearchModel = model<Search & Document>('Search', searchSchema);

export default SearchModel;
