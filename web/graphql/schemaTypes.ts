export interface ItemProps {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  largeImage: string;
}

export interface GetItemsQuery {
  items: ItemProps[];
}

export interface CreateItemMutation_createItemMutation {
  id: string;
}

export interface CreateItemMutation {
  createItem: CreateItemMutation_createItemMutation | null;
}

export interface CreateItemMutationVariables {
  title: string;
  price: number;
  description: string;
  image?: string;
  largeImage?: string;
}
