import { Router } from 'express';
import { getInfo } from '../controllers/admin';
import adminMiddleware from '../middlewares/admin';

const router: Router = Router();
const path = '/admin';

router.get(`${path}/info`, adminMiddleware, getInfo);

export default router;
