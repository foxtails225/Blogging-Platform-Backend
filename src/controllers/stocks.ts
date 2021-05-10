/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { Tag } from '../types/post';
import { Chart, KeyStats, Profile, Quote } from '../types/stock';
import PostModel from '../models/posts';

const { IEX_BASE_URL, IEX_TOKEN, STOCK_NEWS_BASE_URL, STOCK_NEWS_TOKEN } = process.env;

export const getSearch = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { id } = req.params;

  try {
    const response = await axios.get<Tag[]>(`${IEX_BASE_URL}/search/${id}`, {
      params: { token: IEX_TOKEN },
    });

    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const getQuote = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { id } = req.params;

  try {
    const response = await axios.get<Quote>(`${IEX_BASE_URL}/stock/${id}/quote`, {
      params: { token: IEX_TOKEN },
    });

    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const getChart = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { id } = req.params;
  const { type } = req.query;

  try {
    let result = [];
    const url = type === 'dynamic' ? `${id}/intraday-prices` : `${id}/chart/${type}`;
    const response = await axios.get<Chart[]>(`${IEX_BASE_URL}/stock/${url}`, {
      params: { token: IEX_TOKEN, chartCloseOnly: true, includeToday: true },
    });
    //@ts-ignore
    if (response.data && response.data.length > 0) {
      result = response.data.map(item => {
        const date = type === 'dynamic' ? item.date + ' ' + item.minute : item.date;
        return [Date.parse(date), item.close];
      });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getStats = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { id } = req.params;

  try {
    const response = await axios.get<KeyStats>(`${IEX_BASE_URL}/stock/${id}/advanced-stats`, {
      params: { token: IEX_TOKEN },
    });

    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { id } = req.params;

  try {
    const response = await axios.get<Profile>(`${IEX_BASE_URL}/stock/${id}/company`, {
      params: { token: IEX_TOKEN },
    });

    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const getStockNews = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { id } = req.params;
  const { items } = req.query;

  try {
    const response = await axios.get<Profile>(`${STOCK_NEWS_BASE_URL}`, {
      params: { tickers: id, items, token: STOCK_NEWS_TOKEN },
    });

    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const getTopStocks = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const quotes: Quote[] = [];

  try {
    const data = await PostModel.aggregate([
      {
        $project: {
          _id: 0,
          data: {
            $map: { input: '$tags', as: 'ar', in: '$$ar.symbol' },
          },
        },
      },
      { $group: { _id: null, uniqueTags: { $push: '$data' } } },
      {
        $project: {
          _id: 0,
          uniqueTags: {
            $reduce: {
              input: '$uniqueTags',
              initialValue: [],
              in: {
                $let: {
                  vars: { elem: { $concatArrays: ['$$this', '$$value'] } },
                  in: { $setUnion: '$$elem' },
                },
              },
            },
          },
        },
      },
    ]);

    for (const tag of data[0].uniqueTags) {
      const response = await axios.get<Quote>(`${IEX_BASE_URL}/stock/${tag}/quote`, {
        params: { token: IEX_TOKEN },
      });
      quotes.push(response.data);
    }
    quotes
      .sort((a, b) => Number(a.latestPrice) - Number(b.latestPrice))
      .sort((a, b) => Number(a.changePercent) - Number(b.changePercent));

    res.status(200).json({ quotes: quotes.reverse().slice(0, 5) });
  } catch (error) {
    next(error);
  }
};
