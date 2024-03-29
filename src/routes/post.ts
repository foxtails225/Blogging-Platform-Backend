import { Router } from 'express';
import {
  getPost,
  getStockPosts,
  getPostsAll,
  createPost,
  uploadImage,
  updatePost,
  updateLikedPost,
  updateFlagPost,
  updateStatus,
  getPostById,
} from '../controllers/posts';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/posts';

router.get(`${path}/get/:id`, getPost);
router.get(`${path}/getById/:id`, getPostById);
router.get(`${path}/get/stock/:id`, getStockPosts);
router.post(`${path}/all`, getPostsAll);
router.post(`${path}/new`, authMiddleware, createPost);
router.post(`${path}/upload-image`, authMiddleware, uploadImage);
router.put(`${path}/update`, authMiddleware, updatePost);
router.put(`${path}/liked`, authMiddleware, updateLikedPost);
router.put(`${path}/flaged`, authMiddleware, updateFlagPost);
router.put(`${path}/update/status`, authMiddleware, updateStatus);

export default router;
