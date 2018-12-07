import { Prisma } from './generated/prisma';
import { ICookie } from './interfaces/Cookie.interface';

enum Permission {
  ADMIN,
  USER,
  ITEMCREATE,
  ITEMUPDATE,
  ITEMDELETE,
  PERMISSIONUPDATE
}

interface User {
  permissions: [Permission];
}

export const hasPermission = ({ permissions }: User, permissionsNeeded) => {
  const matchedPermissions = permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    throw new Error(`You have insufficient permissions
      : ${permissionsNeeded}
      You Have:
      ${permissions}
      `);
  }
};

export const setCookie = ({ token, ctx }: ICookie) =>
  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
