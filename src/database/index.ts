const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE, MONGO_USER, MONGO_PWD } = process.env;
const url = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

export const db = {
  url,
  options: {
    authSource: 'admin',
    user: MONGO_USER,
    pass: MONGO_PWD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};
