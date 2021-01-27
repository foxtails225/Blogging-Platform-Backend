import { Router } from 'express';
import { createComment, createReply } from '../controllers/comments';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/comments';

router.post(`${path}/create`, authMiddleware, createComment);
router.post(`${path}/reply/create`, authMiddleware, createReply);

export default router;
