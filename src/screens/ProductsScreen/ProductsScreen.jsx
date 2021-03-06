import "./productsScreen.css";
import { Filter, Product } from "../../components";
import { useProducts, useSortAndFilter } from "../../contexts";
import {
  priceFilterHelper,
  sortedFilterHelper,
  ratingFilterHelper,
  categoryFilterHelper,
  searchFilterHelper,
} from "../../helper";
import { useDocumentTitle } from "../../hooks";
const ProductsScreen = () => {
  const { state } = useSortAndFilter();
  const { products } = useProducts();
  useDocumentTitle("Products");
  const sortedAndFilteredProducts = () => {
    const bySearch = searchFilterHelper(products, state.bySearch);
    const bySortArr = sortedFilterHelper(bySearch, state.bySort);
    const byPriceArr = priceFilterHelper(bySortArr, state.byPrice);
    const byRatingArr = ratingFilterHelper(byPriceArr, state.byRating);
    const byCategoryArr = categoryFilterHelper(byRatingArr, state.byCategories);
    return byCategoryArr;
  };
  return (
    <div>
      <Filter />
      <div className="product">
        <h4 className="text-center text-xl fw-400 product-heading">
          Total Products available : {sortedAndFilteredProducts().length}
        </h4>
        <div className="flex-row ">
          <div className="all-products-container flex-row">
            {products &&
              sortedAndFilteredProducts().map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductsScreen };
