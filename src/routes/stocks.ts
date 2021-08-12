import { Router } from 'express';
import {
  getQuote,
  getSearch,
  getChart,
  getStats,
  getProfile,
  getStockNews,
  getTopStocks,
  getLegacyTopStocks,
  createStockBySearch,
} from '../controllers/stocks';

const router: Router = Router();
const path = '/stock';

router.get(`${path}/search/:id`, getSearch);
router.get(`${path}/quote/:id`, getQuote);
router.get(`${path}/chart/:id`, getChart);
router.get(`${path}/advanced-stats/:id`, getStats);
router.get(`${path}/company/:id`, getProfile);
router.get(`${path}/news/:id`, getStockNews);
router.get(`${path}/top-legacy`, getLegacyTopStocks);
router.get(`${path}/top`, getTopStocks);
router.post(`${path}/search/create`, createStockBySearch);

export default router;
