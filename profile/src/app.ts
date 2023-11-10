import express, { Express } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { NotFoundError } from './errors';
import { errorHandler } from './middlewares';

const app: Express = express();

app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
    // expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 60 * 1000), // 7 days
  })
);
app.use(cors());

app.all('*', async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
