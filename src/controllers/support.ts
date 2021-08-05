/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import { Support } from '../types/support';
import { sendTemplateEmail } from '../services/aws-ses';

export const contact = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const contactData: Support = req.body;
  const sender = 'autoreplygang@dankstocks.com';
  const email = contactData.type === 'support' ? 'support@dankstocks.com' : 'advertising@dankstocks.com';

  try {
    const data = `{ \"name\":\"${contactData.name}\", 
      \"email\": \"${contactData.email}\", 
      \"message\": \"${contactData.message.replace(/\n/g, '')}\" }`;

    sendTemplateEmail(sender, email, 'contact_support', data);
    res.status(200).send({ contactData });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
