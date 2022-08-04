import { createContext, useContext, useReducer } from "react";
import { orderReducer } from "../reducers";
const OrderContext = createContext(null);
const intialOrderState = {
  addresses: {
    defaultAddress:
      "H.no-43/A,Sector-4,Vijaynagar,Ghaziabad,Uttar Pradesh,201009",
    otherAddresses: [],
  },
  orders: [],
};
const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(
    orderReducer,
    intialOrderState
  );
  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
