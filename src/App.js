import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens";
import { Footer, Navbar } from "./components";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
