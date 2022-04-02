import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeScreen, ProductsScreen } from "./screens";
import { Footer, Navbar } from "./components";
const App = () => {
  return (
    <>
      <div className="body-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
        </Routes>
        <Routes>
          <Route path="/products" exact element={<ProductsScreen />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
