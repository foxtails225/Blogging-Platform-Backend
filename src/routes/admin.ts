import { Router } from 'express';
import { getPosts, getUsers } from '../controllers/admin';
import adminMiddleware from '../middlewares/admin';

const router: Router = Router();
const path = '/admin';

router.post(`${path}/posts/all`, adminMiddleware, getPosts);
router.post(`${path}/users/all`, adminMiddleware, getUsers);

export default router;
