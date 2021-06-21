import { Router } from 'express';
import { contact } from '../controllers/support';

const router: Router = Router();
const path = '/support';

router.post(`${path}/contact`, contact);

export default router;
