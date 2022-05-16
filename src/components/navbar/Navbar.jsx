import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useCart, useWishlist, useAuth } from "../../contexts";
const Navbar = () => {
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };
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
        <ul className="flex-row navitem-container">
          {user ? (
            <button
              className="btn btn-solid-primary logout-btn text-base text-white"
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            ""
          )}
          <li>
            {user ? (
              <Link to="/profile" title="Profile">
                <div className="badge badge-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
              </Link>
            ) : (
              <Link to="/login" title="login">
                <div className="badge badge-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
              </Link>
            )}
          </li>
          <li>
            <Link to="./wishlist" title="Wishlist">
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
            <Link to="./cart" title="Cart">
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
