import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const CartContext = createContext(null);
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
