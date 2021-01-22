const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;

export const db =
  MONGO_HOST === 'localhost'
    ? {
        url: `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        },
      }
    : {
        url: `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
        options: {
          user: 'dankhcqz',
          pass: 'night225@@%',
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        },
      };
