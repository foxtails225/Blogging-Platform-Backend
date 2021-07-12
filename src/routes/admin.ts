import { Router } from 'express';
import { getAlert, getPosts, getUsers, getRefunds, createAlert } from '../controllers/admin';
import adminMiddleware from '../middlewares/admin';

const router: Router = Router();
const path = '/admin';

router.get(`${path}/alert`, getAlert);
router.post(`${path}/posts/all`, adminMiddleware, getPosts);
router.post(`${path}/users/all`, adminMiddleware, getUsers);
router.post(`${path}/refunds`, adminMiddleware, getRefunds);
router.post(`${path}/alert`, adminMiddleware, createAlert);

export default router;
