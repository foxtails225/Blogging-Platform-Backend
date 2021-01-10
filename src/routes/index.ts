import { Router } from 'express';
import account from './account';
import auth from './auth';
import users from './users';

const routes: Router[] = [account, auth, users];

export default routes;
