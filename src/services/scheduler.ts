import cron from 'node-cron';
import moment from 'moment';
import UserModel from '../models/users';
import { User } from '../types/user';
import { sendTemplateEmail } from './aws-ses';

export const updateBannedUsers = cron.schedule('0 0 */3 * * *', async () => {
  const today = moment().toDate();
  const sender = 'autoreplygang@dankstocks.com';
  const summary = 'Your suspension has ended!';

  const users: User[] = await UserModel.find({ banned: { $lte: today } });
  await UserModel.updateMany({ banned: { $lte: today } }, { status: true, banned: null });

  for (const user of users) {
    const data = `{ \"name\":\"${user.name}\", \"summary\":\"${summary}\" }`;
    sendTemplateEmail(sender, user.email, 'account_recovered', data);
  }
});
