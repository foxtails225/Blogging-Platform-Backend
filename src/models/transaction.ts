import { model, Schema, Document } from 'mongoose';
import { Transaction } from '../types/transaction';

const { ObjectId, String, Number } = Schema.Types;

const transactionSchema: Schema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
    },
    client: {
      type: ObjectId,
      ref: 'User',
    },
    amount: Number,
    fee: Number,
    type: {
      type: String,
      enum: ['post_approved', 'tips'],
      required: true,
    },
    refId: String,
  },
  { timestamps: true },
);

const TransactionModel = model<Transaction & Document>('Transaction', transactionSchema);

export default TransactionModel;
