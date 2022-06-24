import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  ProductsScreen,
  CartScreen,
  WishlistScreen,
  Login,
  Signup,
  PorfileScreen,
} from "./screens";
import {
  Footer,
  Navbar,
  CustomToast,
  UserOrders,
  UserAddresses,
  UserProfile,
} from "./components";
const App = () => {
  return (
    <>
      <div className="body-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/wishlist" element={<WishlistScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<PorfileScreen />}>
            <Route index element={<UserProfile />} />
            <Route path="addresses" element={<UserAddresses />} />
            <Route path="orders" element={<UserOrders />} />
          </Route>
        </Routes>
        <Footer />
        <CustomToast />
      </div>
    </>
  );
};

export default App;
