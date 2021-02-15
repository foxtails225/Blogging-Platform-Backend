import { Router } from 'express';
import { getFlagsAll, createComment, updateLikedComment, createCommentFlag } from '../controllers/comments';
import authMiddleware from '../middlewares/auth';
import adminMiddleware from '../middlewares/admin';

const router: Router = Router();
const path = '/comments';

router.get(`${path}/flagsAll`, adminMiddleware, getFlagsAll);
router.post(`${path}/create`, authMiddleware, createComment);
router.put(`${path}/liked`, authMiddleware, updateLikedComment);
router.put(`${path}/flag`, authMiddleware, createCommentFlag);

export default router;
