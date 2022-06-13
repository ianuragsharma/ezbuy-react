const wishlistReducer = (wishlistState, { type, payload }) => {
  switch (type) {
    case "TOGGLE_FAVOURATE": {
      // Checks if the item is already in wishlist or not if yes then toggle the isFavourated Property else adds the item to the wishlist
      if (wishlistState.some((item) => item._id === payload._id)) {
        return wishlistState.filter((item) => item._id !== payload._id);
      } else {
        return [...wishlistState, { ...payload, isFavourated: true }];
      }
    }
    case "CLEAR_WISHLIST":
      return [];
    default:
      return wishlistState;
  }
};
export { wishlistReducer };
