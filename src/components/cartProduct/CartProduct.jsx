import "./cartProduct.css";
import { useCart } from "../../contexts";
const CartProduct = () => {
  const { cartState, cartDispatch } = useCart();
  // Wanted to use input field for cartItems ran into a bug will reactifi it later on
  // reference : https://github.com/facebook/react/issues/19290
  // const [inputState, setInputState] = useState(1);
  // const inputHandler = (event) => {
  //   if (event.key === "Enter") console.log(event.target.value);
  //   cartDispatch({
  //     type: "INPUT_QTY",
  //     payload: { cartItemId: cartItem._id, qty: event.target.value },
  //   });
  // };
  // useEffect(() => console.log("hello"), [inputState]);
  // const handleChange = (qty) => {
  //   setInputState(qty);
  // };

  const itemsInCart = cartState.map((cartItem) => (
    <div key={cartItem._id} className="horizontal-card flex-row">
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
          {/* 
          This was a bug will rectify it later on
          <input
            name="name"
            type="text"
            value={inputState}
            onChange={() => handleChange(cartItem.quantity)}
            onKeyDown={inputHandler}
            className="input-area text-sm text-center quantity-input"
          /> */}
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
              cartDispatch({ type: "REMOVE_FROM_CART", payload: cartItem._id })
            }
          >
            Remove From Cart
          </button>
          <button className="btn btn-solid-primary  text-white">
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  ));
  return <>{itemsInCart}</>;
};

export { CartProduct };
