import { fireEvent } from 'react-testing-library';
import { seed, name, email, word, words, uuid } from 'casual';

// seed it so we get consistent results
seed(777);

const fakeItem = () => ({
  __typename: 'Item',
  id: 'abc123',
  price: 5000,
  user: null,
  image: 'dog-small.jpg',
  title: 'dogs are best',
  description: 'dogs',
  largeImage: 'dog.jpg'
});

const fakeUser = () => ({
  __typename: 'User',
  id: '4234',
  name,
  email,
  permissions: ['ADMIN'],
  orders: [],
  cart: []
});

const fakeOrderItem = () => ({
  __typename: 'OrderItem',
  id: uuid,
  image: `${word}.jpg`,
  title: words(),
  price: 4234,
  quantity: 1,
  description: words()
});

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: '2018-04 - 06T19: 24: 16.000Z',
  user: fakeUser()
});

const fakeCartItem = (overrides: any) => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  item: fakeItem(),
  user: fakeUser(),
  ...overrides
});

// Fake LocalStorage
class LocalStorageMock {
  store: any = {};

  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key: any) {
    return this.store[key] || null;
  }

  setItem(key: any, value: any) {
    this.store[key] = value.toString();
  }

  removeItem(key: any) {
    delete this.store[key];
  }
}

const type = (inputField: HTMLInputElement, inputContent: string) =>
  fireEvent.change(inputField, { target: { value: inputContent } });

export {
  LocalStorageMock,
  fakeItem,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
  type
};
