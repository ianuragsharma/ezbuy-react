import { Product } from "../";
import { useProducts } from "../../contexts";
const TrendingProducts = () => {
  const { products } = useProducts();
  const trendingProducts = products.slice(0, 4);
  return (
    <>
      {products &&
        trendingProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
    </>
  );
};

export { TrendingProducts };
