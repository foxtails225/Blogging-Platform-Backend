import { Router } from 'express';
import { getInfo, getStatus, updateInfo, updatePassword } from '../controllers/accounts';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/account';

router.get(`${path}/about`, authMiddleware, getInfo);
router.get(`${path}/status`, authMiddleware, getStatus);
router.put(`${path}/update`, authMiddleware, updateInfo);
router.put(`${path}/password`, authMiddleware, updatePassword);

export default router;
