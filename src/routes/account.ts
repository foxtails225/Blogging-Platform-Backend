import { Router } from 'express';
import {
  getInfo,
  getStatus,
  getStatistics,
  getFollowing,
  getFollowers,
  updateInfo,
  updatePassword,
  updateFollowers,
} from '../controllers/accounts';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/account';

router.get(`${path}/about`, authMiddleware, getInfo);
router.get(`${path}/status`, authMiddleware, getStatus);
router.get(`${path}/statistics`, authMiddleware, getStatistics);
router.post(`${path}/following`, authMiddleware, getFollowing);
router.post(`${path}/followers`, authMiddleware, getFollowers);
router.put(`${path}/update`, authMiddleware, updateInfo);
router.put(`${path}/password`, authMiddleware, updatePassword);
router.put(`${path}/follow`, authMiddleware, updateFollowers);

export default router;
