import { Router } from 'express';
import { getBookmarksAll, createBookmark, deleteBookmark } from '../controllers/bookmarks';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/bookmarks';

router.get(`${path}/all`, authMiddleware, getBookmarksAll);
router.post(`${path}/create`, authMiddleware, createBookmark);
router.post(`${path}/delete`, authMiddleware, deleteBookmark);

export default router;
