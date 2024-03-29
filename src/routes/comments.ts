import { Router } from 'express';
import {
  getFlagsAll,
  getComments,
  createComment,
  updateLikedComment,
  createCommentFlag,
  deleteComment,
} from '../controllers/comments';
import authMiddleware from '../middlewares/auth';
import adminMiddleware from '../middlewares/admin';

const router: Router = Router();
const path = '/comments';

router.get(`${path}/flagsAll`, adminMiddleware, getFlagsAll);
router.post(`${path}/get`, getComments);
router.post(`${path}/create`, authMiddleware, createComment);
router.put(`${path}/liked`, authMiddleware, updateLikedComment);
router.put(`${path}/flag`, authMiddleware, createCommentFlag);
router.delete(`${path}/delete`, authMiddleware, deleteComment);

export default router;
