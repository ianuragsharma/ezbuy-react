import "./cartScreen.css";
import { CartProduct, CartPrice } from "../../components";
import { useCart } from "../../contexts";
import { Link } from "react-router-dom";
const CartScreen = () => {
  const { cartState } = useCart();
  return (
    <div>
      <h3 className="text-center cart-heading fw-500">
        My Cart({cartState.length})
      </h3>
      <section className="cart-container flex-row">
        <div className="cart-products flex-row">
          {cartState.length > 0 ? (
            <CartProduct />
          ) : (
            <h4 className="fw-300">
              Oh! you dont have any products in your cart{" "}
              <Link className="text-primary" to="/products">
                Lets go Shopping
              </Link>
            </h4>
          )}
        </div>
        {cartState.length > 0 && <CartPrice />}
      </section>
    </div>
  );
};

export { CartScreen };
