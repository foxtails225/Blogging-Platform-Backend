import { Router } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import authMiddleware from '../middlewares/auth';
import validationMiddleware from '../middlewares/validation';
import { signUp, logIn, verifyCode, resendCode, recoveryLink, resetPassword, logOut } from '../controllers/auth';

const router: Router = Router();

router.post('/signup', validationMiddleware(CreateUserDto, 'body'), signUp);
router.post('/login', validationMiddleware(CreateUserDto, 'body'), logIn);
router.post('/verify-code', verifyCode);
router.post('/resend-code', resendCode);
router.post('/recovery-password', recoveryLink);
router.post('/password-reset', resetPassword);
router.post('/logout', authMiddleware, logOut);

export default router;
