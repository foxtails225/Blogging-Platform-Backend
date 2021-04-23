import { cleanEnv, port, str, url } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    MONGO_HOST: str(),
    MONGO_PORT: str(),
    MONGO_DATABASE: str(),
    JWT_SECRET: str(),
    BASE_URL: url(),
    IEX_BASE_URL: url(),
    IEX_TOKEN: str(),
    STOCK_NEWS_BASE_URL: url(),
    STOCK_NEWS_TOKEN: str(),
    STRIPE_KEY: str(),
    STRIPE_SECRET_KEY: str(),
  });
};

export default validateEnv;
