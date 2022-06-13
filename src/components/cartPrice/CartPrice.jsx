import "./cartPrice.css";
import { useCart } from "../../contexts";
const CartPrice = () => {
  const { cartState } = useCart();
  const totalCartPrice = cartState.reduce(
    (acc, curr) => acc + Number(curr.price) * Number(curr.quantity),
    0
  );
  const cartDiscount = cartState.reduce(
    (acc, curr) =>
      acc +
      (Number(curr.price) - Number(curr.discountPrice)) * Number(curr.quantity),
    0
  );
  return (
    <div className="price-container my-1">
      <h4 className="fw-500 text-xl price-details">Price Details</h4>
      <div className="price-breakdown">
        <div className="flex-row price-details">
          <span>Price ({cartState.length} items)</span>
          <span>Rs {totalCartPrice}</span>
        </div>
        <div className="flex-row price-details">
          <span>Discount ({cartState.length} items)</span>
          <span>Rs {cartDiscount}</span>
        </div>
        <div className="flex-row price-details">
          <span>Delivery Charges</span>
          <span className="text-primary">Free</span>
        </div>
        <div className="flex-row price-details">
          <span className="fw-500">Total Amount</span>
          <span className="fw-500">Rs {totalCartPrice - cartDiscount}</span>
        </div>
      </div>
      <p className="fw-500">You will save Rs.{cartDiscount} on this order</p>
      <button className="btn btn-solid-primary order-btn text-white  text-base">
        Place Order
      </button>
    </div>
  );
};

export { CartPrice };
