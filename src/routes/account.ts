import { Router } from 'express';
import { getInfo, updateInfo } from '../controllers/account';

const router: Router = Router();
const path = '/account';

router.get(`${path}/me`, getInfo);
router.put(`${path}/update`, updateInfo);

export default router;
