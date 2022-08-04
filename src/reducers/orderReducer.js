const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case "PLACE_ORDER":
      return {
        ...state,
        orders: [...state.orders, payload],
      };

    default:
      throw new Error("Action type not found.");
  }
};
export { orderReducer };
