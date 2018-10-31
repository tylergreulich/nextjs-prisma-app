import { ItemProps } from '../interfaces/Item.interface';

// ====================================================
// GraphQL query operation: SingleItemQuery
// ====================================================

export interface SingleItemQuery {
  item: ItemProps;
}

export interface SingleItemQueryVariables {
  id: string;
}

// ====================================================
// GraphQL query operation: GetItemsQuery
// ====================================================

export interface GetItemsQuery {
  items: ItemProps[];
}

// ====================================================
// GraphQL mutation operation: CreateItemMutation
// ====================================================

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

// ====================================================
// GraphQL mutation operation: DeleteItemMutation
// ====================================================

export interface DeleteItemMutation_deleteItemMutation {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface DeleteItemMutation {
  deleteItem: DeleteItemMutation_deleteItemMutation | null;
}

export interface DeleteItemMutationVariables {
  id: string;
}

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

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
