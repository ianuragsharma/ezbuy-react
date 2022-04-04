import { Link } from "react-router-dom";
import "./navbar.css";
import { useCart, useWishlist } from "../../contexts";
const Navbar = () => {
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  return (
    <div>
      <nav className="nav-container flex-row">
        <div className="flex-row">
          <Link to="/">
            <h4 className="fw-500">ezBuy</h4>
          </Link>

          <Link to="./products">
            <button className="btn btn-outlined-secondary text-xl btn-cta">
              Shop
            </button>
          </Link>
        </div>
        <input
          name="name"
          type="text"
          className="input-area text-base "
          placeholder="Search..."
        />
        <ul className="flex-row">
          <li>
            <Link to="/somewhere">
              <div className="badge badge-icon">
                <i className="fa-solid fa-user"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link to="./wishlist">
              <div className="badge badge-icon">
                <i className="fa-regular fa-heart fa-lg"></i>
                {wishlistState.length > 0 && (
                  <div className="number  badge-secondary text-white">
                    {wishlistState.length}
                  </div>
                )}
              </div>
            </Link>
          </li>

          <li>
            <Link to="./cart">
              <div className="badge badge-icon">
                <i className="fas fa-shopping-cart fa-lg"></i>

                {cartState.length > 0 && (
                  <div className="number badge-secondary text-white">
                    {cartState.length}
                  </div>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
