import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../contexts";
import "./product.css";

const Product = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  // this function returns true if the porduct is present in the cartState by comparing the id of item in cartState and the product which is passed as prop
  const isAlreadyInCart = () =>
    cartState.some((item) => item._id === product._id);
  // similar to above function but works on filted product only.
  const favouratedItem = () =>
    wishlistState.some((item) => item._id === product._id);
  return (
    <>
      <div className="vertical-card flex-column card-dismiss ">
        <span className="text-xs text-center text-black rating">
          {product.rating}
          <i className="fa-solid fa-star text-primary"></i> |{" "}
          {product.allRating}
        </span>
        <span
          className="text-center wishlist"
          onClick={() =>
            wishlistDispatch({ type: "TOGGLE_FAVOURATE", payload: product })
          }
        >
          {favouratedItem() ? (
            <i className="fa-solid fa-heart checked-heart"></i>
          ) : (
            <i className="fa-solid fa-heart "></i>
          )}
        </span>
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
              onClick={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: product })
              }
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
