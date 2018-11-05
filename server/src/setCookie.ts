import { Context } from './utils';

export const setCookie = (token: string, ctx: Context) => {
  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
};
