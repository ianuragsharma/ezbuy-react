import "./wishlistScreen.css";
import { useWishlist } from "../../contexts";
import { Product } from "../../components";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
const WishlistScreen = () => {
  const { wishlistState } = useWishlist();
  useDocumentTitle("Wishlist");
  const wishlistItems = wishlistState.map((item) => (
    <Product key={item._id} product={item} />
  ));
  return (
    <>
      <section className="wishlist-container">
        <h3 className="fw-500 wishlist-heading text-center">My Wishlist</h3>
        <div className="wishlist-product flex-row">
          {wishlistState.length > 0 ? (
            wishlistItems
          ) : (
            <h4 className="fw-300">
              Oh! you dont have any products in your Wishlist{" "}
              <Link className="text-primary" to="/products">
                Lets go Shopping
              </Link>
            </h4>
          )}
        </div>
      </section>
    </>
  );
};

export { WishlistScreen };
