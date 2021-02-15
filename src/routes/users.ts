import { Router } from 'express';
import { getUser, getUserStatus, updateStatus } from '../controllers/users';
import authMiddleware from '../middlewares/admin';

const router: Router = Router();
const path = '/users';

router.get(`${path}/:id/about`, getUser);
router.get(`${path}/:id/status`, getUserStatus);
router.put(`${path}/update/status`, authMiddleware, updateStatus);

export default router;
