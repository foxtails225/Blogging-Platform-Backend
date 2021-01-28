import { Router } from 'express';
import { getUser, getUserStatus } from '../controllers/users';

const router: Router = Router();
const path = '/users';

router.get(`${path}/:id/about`, getUser);
router.get(`${path}/:id/status`, getUserStatus);

export default router;
