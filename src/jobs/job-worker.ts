import cron from 'node-cron';
import moment from 'moment';
import UserModel from '../models/users';

export default cron.schedule('0 0 */3 * * *', async () => {
  const today = moment().toDate();
  await UserModel.updateMany({ banned: { $lte: today } }, { status: true, banned: null });
});
