const cartReducer = (cartState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return [...cartState, { ...payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return cartState.filter((item) => item._id !== payload);

    case "INCREASE_QTY":
      return cartState.map((item) =>
        item._id === payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "DECREASE_QTY":
      return cartState.map((item) =>
        item._id === payload
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      );

    // case "INPUT_QTY":
    //   return cartState.map((item) =>
    //     item._id === payload.cartItemId
    //       ? { ...item, quantity: payload.qty >= 0 ? payload.qty : 1 }
    //       : item
    //   );

    default:
      return cartState;
  }
};

export { cartReducer };
