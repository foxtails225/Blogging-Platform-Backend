import { Router } from 'express';
import { getBookmarksAll } from '../controllers/bookmarks';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/bookmarks';

router.get(`${path}/all`, authMiddleware, getBookmarksAll);

export default router;
