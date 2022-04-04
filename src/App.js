import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  ProductsScreen,
  CartScreen,
  WishlistScreen,
} from "./screens";
import { Footer, Navbar } from "./components";
const App = () => {
  return (
    <>
      <div className="body-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/products" exact element={<ProductsScreen />} />
          <Route path="/cart" exact element={<CartScreen />} />
          <Route path="/wishlist" exact element={<WishlistScreen />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
