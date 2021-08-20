import { Router } from 'express';
import { getUser, getUserStatus, getTopAuthors, updateStatus, updateAvatar } from '../controllers/users';
import authMiddleware from '../middlewares/admin';

const router: Router = Router();
const path = '/users';

router.get(`${path}/:id/about`, getUser);
router.get(`${path}/:id/status`, getUserStatus);
router.post(`${path}/top`, getTopAuthors);
router.put(`${path}/update/avatar`, authMiddleware, updateAvatar);
router.put(`${path}/update/status`, authMiddleware, updateStatus);

export default router;
