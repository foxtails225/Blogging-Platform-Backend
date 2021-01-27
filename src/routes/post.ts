import { Router } from 'express';
import { getPost, getPostsAll, createPost, updateLikedPost } from '../controllers/posts';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/posts';

router.get(`${path}/get/:id`, getPost);
router.post(`${path}/all`, authMiddleware, getPostsAll);
router.post(`${path}/new`, authMiddleware, createPost);
router.put(`${path}/liked`, authMiddleware, updateLikedPost);

export default router;
