import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers";
const WishlistContext = createContext(null);
const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
