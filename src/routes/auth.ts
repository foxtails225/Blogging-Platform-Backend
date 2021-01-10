import { Router } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import authMiddleware from '../middlewares/auth';
import validationMiddleware from '../middlewares/validation';
import { signUp, logIn, logOut } from '../controllers/auth';

const router: Router = Router();

router.post('/signup', validationMiddleware(CreateUserDto, 'body'), signUp);
router.post('/login', validationMiddleware(CreateUserDto, 'body'), logIn);
router.post('/logout', authMiddleware, logOut);

export default router;
