import { Router } from 'express';
import {
  getTopNotifications,
  getNotifications,
  createNotification,
  updateRead,
  updateReadAll,
} from '../controllers/notifications';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/notifications';

router.get(`${path}/top`, authMiddleware, getTopNotifications);
router.post(`${path}/get/:id`, authMiddleware, getNotifications);
router.post(`${path}/create`, authMiddleware, createNotification);
router.put(`${path}/update/read/:id`, authMiddleware, updateRead);
router.post(`${path}/update/read/all`, authMiddleware, updateReadAll);

export default router;
