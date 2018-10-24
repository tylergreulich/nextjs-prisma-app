import 'dotenv/config';
import { createServer } from './createServer';

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  ({ port }) => console.info(`Server is running on http://localhost:${port}`)
);
