interface ICartItem {
  quantity: number;
  item?: {
    price: number;
  };
}

export const calcTotalPrice = (cart: ICartItem[]) => {
  return cart.reduce((tally: number, cartItem: ICartItem) => {
    if (!cartItem.item) {
      return tally;
    }
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
};
