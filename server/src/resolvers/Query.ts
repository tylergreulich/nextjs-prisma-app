import { Context } from './../utils';
import { forwardTo } from 'prisma-binding';

export const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me: (_, args, { db, request }: Context, info) => {
    if (!request.userId) {
      return null;
    }

    return db.query.user(
      {
        where: { id: request.userId }
      },
      info
    );
  }
};
