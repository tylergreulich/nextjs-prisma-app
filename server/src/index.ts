import 'dotenv/config';
import { NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { createServer } from './createServer';

import * as cookieParser from 'cookie-parser';

const { express, start } = createServer();

express.use(cookieParser());

express.use(
  ({ cookies, userId: reqUserId }: any, __: any, next: NextFunction): void => {
    const { token } = cookies;
    if (token) {
      const { userId }: any = jwt.verify(token, process.env.APP_SECRET!);
      reqUserId = userId;
    }
    next();
  }
);

start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  ({ port }) => console.info(`Server is running on http://localhost:${port}`)
);
