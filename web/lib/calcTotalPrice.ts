export const calcTotalPrice = (cart: any) => {
  return cart.reduce((tally: any, cartItem: any) => {
    if (!cartItem.item) {
      return tally;
    }
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
};
