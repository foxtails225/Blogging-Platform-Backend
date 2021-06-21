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
import transaction from './transaction';
import support from './support';

const routes: Router[] = [
  admin,
  account,
  auth,
  users,
  posts,
  bookmarks,
  comments,
  stocks,
  stripe,
  notification,
  transaction,
  support,
];

export default routes;
