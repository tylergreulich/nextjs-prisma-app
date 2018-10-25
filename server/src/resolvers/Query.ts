import { Context } from './../utils';

export const Query = {
  items: async (_, __, { db }: Context) => await db.query.items({})
};
