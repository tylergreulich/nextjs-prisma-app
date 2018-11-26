import 'dotenv/config';
import { NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { createServer } from './createServer';

import * as cookieParser from 'cookie-parser';

const server = createServer();

server.express.use(cookieParser());

server.express.use(
  (req: any, __: any, next: NextFunction): void => {
    const { token } = req.cookies;
    if (token) {
      const { userId }: any = jwt.verify(token, process.env.APP_SECRET!);
      req.userId = userId;
    }
    next();
  }
);

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  ({ port }) => console.info(`Server is running on http://localhost:${port}`)
);

