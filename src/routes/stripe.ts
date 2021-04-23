import { Router } from 'express';
import { createAccount, createPaymentIntent, transfer } from '../controllers/stripe';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/stripe';

router.post(`${path}/create`, authMiddleware, createAccount);
router.post(`${path}/secret`, authMiddleware, createPaymentIntent);
router.post(`${path}/transfer`, authMiddleware, transfer);

export default router;
