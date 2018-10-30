export interface ItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    largeImage: string;
  };
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

interface RegisterMutation_registerMutation {
  id: string;
  name: string;
  password: string;
}

export interface RegisterMutation {
  register: RegisterMutation_registerMutation | null;
}

export interface RegisterMutationVariables {
  email: string;
  name: string;
  password: string;
}
