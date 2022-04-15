import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  ProductsScreen,
  CartScreen,
  WishlistScreen,
  Login,
  Signup,
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
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
