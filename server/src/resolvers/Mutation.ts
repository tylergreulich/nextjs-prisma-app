import { Context } from './../utils';
import { ItemCreateInput } from '../generated/prisma';

export const Mutation = {
  createItem: async (_, args: ItemCreateInput, { db }: Context, info) => {
    const item = await db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  }
};
