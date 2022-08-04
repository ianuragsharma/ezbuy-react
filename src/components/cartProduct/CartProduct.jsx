import "./cartProduct.css";
import { useCart, useWishlist } from "../../contexts";
import { Link } from "react-router-dom";
import {
  addToWishlistService,
  removeFromCartService,
  updateQtyService,
} from "../../services";

const CartProduct = ({ cartItem }) => {
  const { cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const favouratedItem = () =>
    wishlistState.some((item) => item._id === cartItem._id);
  return (
    <>
      <div className="horizontal-card flex-row">
        <img
          className="image-responsive cart-img"
          src={cartItem.imgURL}
          loading="lazy"
          alt={cartItem.imgAlt}
        />
        <div className="card-details-container ">
          <h5>{cartItem.title}</h5>
          <p className="product-details text-base fw-500">
            Rs. {cartItem.discountPrice}{" "}
            <del className="fw-300 text-sm">Rs.{cartItem.price}</del>
          </p>
          <p className="text-base fw-400">{cartItem.discount}% off </p>
          <p className="product-details  fw-500">
            Quantity:
            <button
              className="quantity-btn"
              onClick={() => {
                if (cartItem.quantity === 1)
                  removeFromCartService(cartItem, cartDispatch);
                else {
                  updateQtyService(cartItem, cartDispatch, "decrement");
                }
              }}
            >
              <i className="fa-solid fa-circle-minus fa-lg"></i>
            </button>
            <span className="mx-1">{cartItem.quantity}</span>
            <button
              className="quantity-btn"
              onClick={() =>
                updateQtyService(cartItem, cartDispatch, "increment")
              }
            >
              <i className="fa-solid fa-circle-plus fa-lg"></i>
            </button>
          </p>
          <div className="cart-btn flex-column">
            <button
              className="btn btn-outlined-secondary "
              onClick={() => removeFromCartService(cartItem, cartDispatch)}
            >
              Remove From Cart
            </button>
            {favouratedItem() ? (
              <button className="btn btn-solid-primary  text-white">
                <Link to="/wishlist">Go to Wishlist</Link>
              </button>
            ) : (
              <button
                className="btn btn-solid-primary  text-white"
                onClick={() => addToWishlistService(cartItem, wishlistDispatch)}
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { CartProduct };
