import { model, Schema, Document } from 'mongoose';
import { Support } from '../types/support';

const supportSchema: Schema = new Schema(
  {
    name: String,
    email: String,
    company: String,
    position: String,
    message: String,
    type: {
      type: String,
      enum: ['support', 'ads'],
      default: 'support',
    },
  },
  { timestamps: true },
);

const SupportModel = model<Support & Document>('Support', supportSchema);

export default SupportModel;
