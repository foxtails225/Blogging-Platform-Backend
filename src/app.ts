import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import path from 'path';
import compression from 'compression';
import { connect, set } from 'mongoose';
import { db } from './database';
import errorMiddleware from './middlewares/error';
import { logger, stream } from './utils/logger';
import validateEnv from './utils/validateEnv';
import routes from './routes';

validateEnv();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;
const env: string = process.env.NODE_ENV || 'development';
env !== 'production' && set('debug', true);

connect(db.url, db.options).then(
  () => {
    logger.info('The database is connected.');
  },
  (error: string) => {
    logger.error(`Unable to connect to the database: ${error}.`);
  },
);
set('useFindAndModify', false);

if (env === 'production') {
  app.use(morgan('combined', { stream }));
} else if (env === 'development') {
  app.use(morgan('dev', { stream }));
}

app.use(hpp());
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./build'));
app.use(cookieParser());

routes.forEach(route => {
  app.use('/api/', route);
});

app.use(errorMiddleware);
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve('./build/' + 'index.html'));
});

app.listen(port, () => {
  logger.info(`App listening on the port ${port}`);
});
