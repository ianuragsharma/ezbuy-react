import "./homescreen.css";
import { Link } from "react-router-dom";
import { Category, TrendingProducts } from "../../components";
import { useDocumentTitle } from "../../hooks";
import { useSortAndFilter } from "../../contexts";
const HomeScreen = () => {
  useDocumentTitle("Home");
  const { dispatch } = useSortAndFilter();
  return (
    <>
      <section className="hero-banner">
        <div className="text-center">
          <h3 className="text-white hero-heading  fw-500">iPhone 13</h3>
          <button className="btn  link-btn text-lg text-primary">
            <Link
              to="/products"
              onClick={() =>
                dispatch({ type: "SEARCH_PRODUCT", payload: "iphone" })
              }
            >
              Buy Now
            </Link>
          </button>
        </div>
      </section>
      <section className="container">
        <h4 className="flex-row section-heading fw-400">Trending Products</h4>
        <div className="product-list flex-row">
          <TrendingProducts />
        </div>
      </section>
      <section className="container">
        <h4 className="flex-row section-heading fw-400">Browse Category</h4>
        <div className="product-list flex-row">
          <Category />
        </div>
      </section>
    </>
  );
};

export { HomeScreen };
