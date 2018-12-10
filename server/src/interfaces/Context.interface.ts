import { Request, Response } from 'express';
import { Prisma } from 'prisma-binding';

export interface IRequest extends Request {
  userId: string;
}

export interface Context {
  db: Prisma;
  request: IRequest;
  response: Response;
}
