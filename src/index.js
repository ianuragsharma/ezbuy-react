import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ProductsProvider,
  FilterProvider,
  CartProvider,
  WishlistProvider,
  AuthContextProvider,
  OrderProvider,
} from "./contexts";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <OrderProvider>
          <WishlistProvider>
            <CartProvider>
              <FilterProvider>
                <ProductsProvider>
                  <App />
                </ProductsProvider>
              </FilterProvider>
            </CartProvider>
          </WishlistProvider>
        </OrderProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
