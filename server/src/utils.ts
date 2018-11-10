import { Prisma } from './generated/prisma';
import { Request, Response } from 'express';
// import * as jwt from 'jsonwebtoken';

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
    throw new Error(`You do not have sufficient permissions
      : ${permissionsNeeded}
      You Have:
      ${user.permissions}
      `);
  }
};

export const setCookie = (token: string, ctx: Context) => {
  return ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
};


// export const signJwtToken = (user: User, response: Response) => {
//   const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);

//   response.cookie('token', token, {
//     httpOnly: true,
//     maxAge: 1000 * 60 * 60 * 24 * 365 // 1y
//   });

//   return user;
// };
