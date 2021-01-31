import { Router } from 'express';
import {
  getBookmark,
  getBookmarksAll,
  getArchivedBookmarks,
  updateArchivedBookmark,
  createBookmark,
  deleteBookmark,
} from '../controllers/bookmarks';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/bookmarks';

router.get(`${path}/get`, authMiddleware, getBookmark);
router.get(`${path}/all`, authMiddleware, getBookmarksAll);
router.get(`${path}/archived-all`, authMiddleware, getArchivedBookmarks);
router.put(`${path}/update/archived`, authMiddleware, updateArchivedBookmark);
router.post(`${path}/create`, authMiddleware, createBookmark);
router.post(`${path}/delete`, authMiddleware, deleteBookmark);

export default router;
