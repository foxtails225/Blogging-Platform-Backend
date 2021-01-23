import { Router } from 'express';
import account from './account';
import auth from './auth';
import users from './users';
import posts from './post';
import bookmarks from './bookmarks';

const routes: Router[] = [account, auth, users, posts, bookmarks];

export default routes;
