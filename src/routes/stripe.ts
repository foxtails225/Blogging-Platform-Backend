import { Router } from 'express';
import { getBalance, createAccount, createPaymentIntent, transfer, createRefund } from '../controllers/stripe';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/stripe';

router.get(`${path}/balance`, authMiddleware, getBalance);
router.post(`${path}/create`, authMiddleware, createAccount);
router.post(`${path}/secret`, authMiddleware, createPaymentIntent);
router.post(`${path}/transfer`, authMiddleware, transfer);
router.post(`${path}/refund`, authMiddleware, createRefund);

export default router;
