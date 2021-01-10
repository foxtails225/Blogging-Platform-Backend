import { Router } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import validationMiddleware from '../middlewares/validation';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/users';

const router: Router = Router();
const path = '/users';

router.get(`${path}`, getUsers);
router.get(`${path}/:id`, getUserById);
router.post(`${path}`, validationMiddleware(CreateUserDto, 'body'), createUser);
router.put(`${path}/:id`, validationMiddleware(CreateUserDto, 'body', true), updateUser);
router.delete(`${path}/:id`, deleteUser);

export default router;
