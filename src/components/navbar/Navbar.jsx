import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="nav-container flex-row">
        <Link to="/">
          <h5 className="fw-500">ezBuy</h5>
        </Link>
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
            <Link to="./somewhere">
              <div className="badge badge-icon">
                <i className="fa-regular fa-heart fa-lg"></i>
                <div className="number  badge-secondary text-white">4</div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="./somewhere">
              <div className="badge badge-icon">
                <i className="fas fa-shopping-cart fa-lg"></i>
                <div className="number badge-secondary text-white">2</div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
