import { model, Schema, Document } from 'mongoose';
import { Notification } from '../types/notification';

const { ObjectId, String } = Schema.Types;

const NotificationSchema: Schema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
    },
    title: String,
    description: String,
    url: String,
    type: {
      type: String,
      enum: ['new_comment', 'post_approved', 'post_rejected', 'payment_success', 'tips_success'],
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const NotificationModel = model<Notification & Document>('Notification', NotificationSchema);

export default NotificationModel;
