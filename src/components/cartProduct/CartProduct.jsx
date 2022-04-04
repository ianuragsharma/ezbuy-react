import "./cartProduct.css";
import { useCart, useWishlist } from "../../contexts";
import { Link } from "react-router-dom";
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
              onClick={() =>
                cartDispatch({ type: "INCREASE_QTY", payload: cartItem._id })
              }
            >
              <i className="fa-solid fa-circle-plus fa-lg"></i>
            </button>
            <span>{cartItem.quantity}</span>
            <button
              className="quantity-btn"
              onClick={() =>
                cartDispatch({ type: "DECREASE_QTY", payload: cartItem._id })
              }
            >
              <i className="fa-solid fa-circle-minus fa-lg"></i>
            </button>
          </p>
          <div className="cart-btn flex-column">
            <button
              className="btn btn-outlined-secondary "
              onClick={() =>
                cartDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: cartItem._id,
                })
              }
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
                onClick={() =>
                  wishlistDispatch({
                    type: "TOGGLE_FAVOURATE",
                    payload: cartItem,
                  })
                }
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
