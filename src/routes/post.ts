import { Router } from 'express';
import { getPost, getPostsAll, createPost } from '../controllers/post';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/posts';

router.get(`${path}/get/:id`, getPost);
router.post(`${path}/all`, authMiddleware, getPostsAll);
router.post(`${path}/new`, authMiddleware, createPost);

export default router;
