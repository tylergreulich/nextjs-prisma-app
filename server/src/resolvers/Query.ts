import { forwardTo } from 'prisma-binding';

export const Query = {
  items: forwardTo('db'),
  item: forwardTo('db')
};
