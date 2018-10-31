import { Context } from './../utils';
import { Item, ItemCreateInput } from '../generated/prisma';

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
  },
  updateItem: async (_, args: Item, { db }: Context, info) => {
    const updates = { ...args };
    delete updates.id;
    const item = await db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id }
      },
      info
    );

    return item;
  },
  deleteItem: async (_, { id }: Item, { db }: Context, info) => {
    const where = { id };

    const item = await db.query.item({ where }, `{ id, title }`);

    // TODO: check if they own it or have the permissions

    return db.mutation.deleteItem({ where }, info);
  }
};
