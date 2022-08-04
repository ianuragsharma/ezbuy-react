import "./cartScreen.css";
import { CartProduct, CartPrice } from "../../components";
import { useCart } from "../../contexts";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
const CartScreen = () => {
  const { cartState } = useCart();
  useDocumentTitle("Cart");
  const cartItems = cartState.map((item) => (
    <CartProduct key={item._id} cartItem={item} />
  ));
  return (
    <div>
      <h4 className="text-center cart-heading fw-500">
        My Cart({cartState.length})
      </h4>
      <section className="cart-container flex-row">
        <div className="cart-products flex-row">
          {cartState.length > 0 ? (
            cartItems
          ) : (
            <h4 className="fw-300">
              Oh! you dont have any products in your cart{" "}
              <Link className="text-primary" to="/products">
                Lets go Shopping
              </Link>
            </h4>
          )}
        </div>
        <div className="cartprice-conatiner">
          {cartState.length > 0 && <CartPrice />}
        </div>
      </section>
    </div>
  );
};

export { CartScreen };
