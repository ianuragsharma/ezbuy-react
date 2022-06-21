import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import {
  useCart,
  useWishlist,
  useAuth,
  useSortAndFilter,
} from "../../contexts";
const Navbar = () => {
  let location = useLocation();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { user, setUser } = useAuth();
  const { state, dispatch } = useSortAndFilter();
  const { bySearch } = state;
  const navigate = useNavigate();
  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
    cartDispatch({ type: "CLEAR_CART" });
    wishlistDispatch({ type: "CLEAR_WISHLIST" });
  };
  return (
    <div>
      <nav className="nav-container flex-row">
        <div className="flex-row logo-container">
          <Link to="/">
            <img className="image-responsive logo" src="/favicon.png" alt="" />
          </Link>

          <Link to="./products">
            <button className="btn btn-solid-primary text-white text-lg btn-cta">
              Shop
            </button>
          </Link>
        </div>
        {location.pathname === "/products" && (
          <input
            name="name"
            type="text"
            className="input-area text-base "
            placeholder="Search..."
            value={bySearch}
            onChange={(event) =>
              dispatch({ type: "SEARCH_PRODUCT", payload: event.target.value })
            }
          />
        )}

        <ul className="flex-row navitem-container">
          {user ? (
            <button
              className="btn btn-outlined-secondary logout-btn text-base"
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
