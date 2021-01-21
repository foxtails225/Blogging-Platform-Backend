import { Router } from 'express';
import { getPosts, getReadingPosts, createPost } from '../controllers/post';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/posts';

router.post(`${path}/all`, authMiddleware, getPosts);
router.get(`${path}/list`, authMiddleware, getReadingPosts);
router.post(`${path}/new`, authMiddleware, createPost);

export default router;
