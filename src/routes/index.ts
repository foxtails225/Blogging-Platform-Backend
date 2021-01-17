import { Router } from 'express';
import account from './account';
import auth from './auth';
import users from './users';
import posts from './post';

const routes: Router[] = [account, auth, users, posts];

export default routes;
