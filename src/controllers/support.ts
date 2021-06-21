/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import SupportModel from '../models/support';
import { Support } from '../types/support';
import { sendEmail } from '../services/aws-ses';

export const contact = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const contactData: Support = req.body;
  const sender = 'autoreplygang@dankstocks.com';
  const email = contactData.type === 'support' ? 'support@dankstocks.com' : 'advertising@dankstocks.com';

  try {
    const support: Support = await SupportModel.create(contactData);
    res.status(200).send({ support });
    sendEmail(sender, email, 'Verify Code', JSON.stringify(support));
  } catch (error) {
    next(error);
  }
};
