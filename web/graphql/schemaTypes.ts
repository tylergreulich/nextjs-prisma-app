import { ItemProps } from 'interfaces/shared/Item.interface';

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

export interface GetItemsQueryVariables {
  skip: number;
  first?: number;
}

// ====================================================
// GraphQL query operation: CurrentUserQuery
// ====================================================

interface CurrentUserQuery_currentUserQuery {
  payload: any;
}

export interface CurrentUserQuery {
  currentUser: CurrentUserQuery_currentUserQuery | null;
}

// ====================================================
// GraphQL mutation operation: CreateItemMutation
// ====================================================

interface CreateItemMutation_createItemMutation {
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

interface DeleteItemMutation_deleteItemMutation {
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
  email: string;
}

export interface RegisterMutation {
  register: RegisterMutation_registerMutation | null;
}

export interface RegisterMutationVariables {
  email: string;
  name: string;
  password: string;
}

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

interface LoginMutation_loginMutation {
  id: string;
}

export interface LoginMutation {
  login: LoginMutation_loginMutation | null;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}
