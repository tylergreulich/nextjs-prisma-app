import { Prisma } from './generated/prisma';
import { Request, Response } from 'express';
import { ICookie } from './interfaces/Cookie.interface'

interface IRequest extends Request {
  userId: any;
}

export interface Context {
  db: Prisma;
  request: IRequest;
  response: Response;
}

export const hasPermission = (user, permissionsNeeded) => {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    throw new Error(`You have insufficient permissions
      : ${permissionsNeeded}
      You Have:
      ${user.permissions}
      `);
  }
};

export const setCookie = ({ token, ctx }: ICookie) =>
  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  );
};
