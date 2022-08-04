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
  CheckoutScreen,
} from "./screens";
import {
  Footer,
  Navbar,
  CustomToast,
  UserOrders,
  UserAddresses,
  UserProfile,
  ProtectedRoute,
} from "./components";
const App = () => {
  return (
    <>
      <div className="body-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/wishlist" element={<WishlistScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
            <Route path="/profile" element={<PorfileScreen />}>
              <Route index element={<UserProfile />} />
              <Route path="addresses" element={<UserAddresses />} />
              <Route path="orders" element={<UserOrders />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
        <CustomToast />
      </div>
    </>
  );
};

export default App;
