import { Request, Response } from 'express';

interface IRequest extends Request {
  userId: string;
}

export interface Context {
  db: Prisma;
  request: IRequest;
  response: Response;
}
