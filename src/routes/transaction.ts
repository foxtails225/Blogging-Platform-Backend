import { Router } from 'express';
import { createTransaction, TransactionsAll, RefundTransaction } from '../controllers/transaction';
import authMiddleware from '../middlewares/auth';

const router: Router = Router();
const path = '/transactions';

router.post(`${path}/create`, authMiddleware, createTransaction);
router.post(`${path}/all`, authMiddleware, TransactionsAll);
router.put(`${path}/refund`, authMiddleware, RefundTransaction);

export default router;
