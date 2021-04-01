/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { Tag } from '../types/post';
import { Chart, KeyStats, Profile, Quote } from '../types/stock';

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

  try {
    const response = await axios.get<Profile>(`${STOCK_NEWS_BASE_URL}`, {
      params: { tickers: id, items: 10, token: STOCK_NEWS_TOKEN },
    });

    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};
