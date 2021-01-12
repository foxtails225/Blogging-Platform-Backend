import { Router } from 'express';
import { getInfo, updateInfo, updatePassword } from '../controllers/account';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/account';

router.get(`${path}/me`, authMiddleware, getInfo);
router.put(`${path}/update`, authMiddleware, updateInfo);
router.put(`${path}/update-password`, authMiddleware, updatePassword);

export default router;
