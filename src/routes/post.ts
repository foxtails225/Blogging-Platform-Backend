import { Router } from 'express';
import { getPosts, createPost } from '../controllers/post';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/posts';

router.get(`${path}/all`, authMiddleware, getPosts);
router.post(`${path}/new`, authMiddleware, createPost);

export default router;
