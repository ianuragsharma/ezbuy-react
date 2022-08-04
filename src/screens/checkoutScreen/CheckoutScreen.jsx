import { Addresses, CartPrice } from "../../components";
import "./checkoutScreen.css";
const CheckoutScreen = () => {
  return (
    <div>
      <h4 className="text-center cart-heading fw-500">Checkout</h4>
      <section className="cart-container flex-row">
        <div className="cart-products deliver-container p-1 text-xl fw-400  ">
          Please select Deliver Address
          <div className="mt-1 deliver-address-conatiner">
            <Addresses />
          </div>
        </div>
        <CartPrice />
      </section>
    </div>
  );
};

export { CheckoutScreen };
