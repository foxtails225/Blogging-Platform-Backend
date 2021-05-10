import { Router } from 'express';
import admin from './admin';
import account from './account';
import auth from './auth';
import users from './users';
import posts from './post';
import bookmarks from './bookmarks';
import comments from './comments';
import stocks from './stocks';
import stripe from './stripe';
import notification from './notification';

const routes: Router[] = [admin, account, auth, users, posts, bookmarks, comments, stocks, stripe, notification];

export default routes;
