import "./cartScreen.css";
import { CartProduct, CartPrice } from "../../components";
import { useCart } from "../../contexts";
const CartScreen = () => {
  const { cartState } = useCart();
  return (
    <div>
      <h3 className="text-center cart-heading">Cart({cartState.length})</h3>
      <section className="cart-container flex-row">
        <div className="cart-products flex-row">
          <CartProduct />
        </div>
        <CartPrice />
      </section>
    </div>
  );
};

export { CartScreen };
