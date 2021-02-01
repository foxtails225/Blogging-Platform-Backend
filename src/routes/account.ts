import { Router } from 'express';
import { getInfo, getStatus, getStatistics, updateInfo, updatePassword } from '../controllers/accounts';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/account';

router.get(`${path}/about`, authMiddleware, getInfo);
router.get(`${path}/status`, authMiddleware, getStatus);
router.get(`${path}/statistics`, authMiddleware, getStatistics);
router.put(`${path}/update`, authMiddleware, updateInfo);
router.put(`${path}/password`, authMiddleware, updatePassword);

export default router;
