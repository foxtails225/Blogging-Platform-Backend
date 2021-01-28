import { Router } from 'express';
import { createComment } from '../controllers/comments';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/comments';

router.post(`${path}/create`, authMiddleware, createComment);

export default router;
