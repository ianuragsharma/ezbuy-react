import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const productData = await axios.get("/api/products");
        setProducts(productData.data.products);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
