import { Link, useNavigate } from "react-router-dom";
import { useCart, useWishlist, useAuth } from "../../contexts";
import "./product.css";
import { successToast, errorToast } from "../../helper";
import {
  addToCartService,
  addToWishlistService,
  removeFromWishlistService,
} from "../../services";

const Product = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { user } = useAuth();
  const navigate = useNavigate();
  // this function returns true if the porduct is present in the cartState by comparing the id of item in cartState and the product which is passed as prop
  const isAlreadyInCart = () =>
    cartState.some((item) => item._id === product._id);
  // similar to above function but works on filted product only.
  const favouratedItem = () =>
    wishlistState.some((item) => item._id === product._id);
  const addToCartHadnler = () => {
    if (user) {
      addToCartService(product, cartDispatch);
    } else {
      navigate("/login");
      errorToast("Please login first");
    }
  };
  const addToWishlistHandler = () => {
    if (user) {
      addToWishlistService(product, wishlistDispatch);
    } else {
      navigate("/login");
      errorToast("Please login first");
    }
  };

  return (
    <>
      <div
        className={`vertical-card flex-column card-dismiss ${
          !product.inStock && "card-overlay"
        } `}
      >
        <span className="text-xs text-center text-black rating">
          {product.rating}
          <i className="fa-solid fa-star text-primary"></i> |{" "}
          {product.allRating}
        </span>
        <span className="text-center wishlist">
          {favouratedItem() ? (
            <i
              className="fa-solid fa-heart checked-heart"
              onClick={() =>
                removeFromWishlistService(product, wishlistDispatch)
              }
            ></i>
          ) : (
            <i
              className="fa-solid fa-heart "
              onClick={addToWishlistHandler}
            ></i>
          )}
        </span>
        {!product.inStock && (
          <div className="overlay text-xl text-white text-center">
            Out of Stock
          </div>
        )}

        <img src={product.imgURL} loading="lazy" alt={product.imgAlt} />
        <div className="card-details-container">
          <h3 className="text-base fw-500">{product.title}</h3>
          <span className="text-xs">{product.description}</span>
          <p className="card-price-info">
            Rs.{product.discountPrice}
            <del className="text-xs"> Rs.{product.price}</del>
          </p>
        </div>
        <div className="card-footer">
          {isAlreadyInCart() ? (
            <button className="btn btn-solid-primary buy-button text-white">
              <Link to="/cart">Go to Cart</Link>
            </button>
          ) : (
            <button
              className="btn btn-solid-primary buy-button text-white"
              onClick={() => addToCartHadnler()}
              disabled={!product.inStock}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export { Product };
