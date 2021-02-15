import { Router } from 'express';
import { getPost, getPostsAll, createPost, updateLikedPost, updateStatus } from '../controllers/posts';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/posts';

router.get(`${path}/get/:id`, getPost);
router.post(`${path}/all`, authMiddleware, getPostsAll);
router.post(`${path}/new`, authMiddleware, createPost);
router.put(`${path}/liked`, authMiddleware, updateLikedPost);
router.put(`${path}/update/status`, authMiddleware, updateStatus);

export default router;
