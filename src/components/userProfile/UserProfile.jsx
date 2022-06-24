import { useAuth, useCart, useWishlist } from "../../contexts";
import "./userProfile.css";

import { successToast } from "../../helper";
const UserProfile = () => {
  const { user, handleLogout } = useAuth();
  const { email, firstName, lastName } = user;
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  const logoutHandler = () => {
    handleLogout();
    cartDispatch({ type: "CLEAR_CART" });
    wishlistDispatch({ type: "CLEAR_WISHLIST" });
    successToast(`You have successfully log out`);
  };
  return (
    <div>
      <p className="user-name">
        <span className=" fw-500">Name</span> : {firstName} {lastName}
      </p>
      <p className="user-name">
        <span className=" fw-500">Email</span> : {email}
      </p>
      <button
        className="btn btn-outlined-secondary logout-btn text-base my-2"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export { UserProfile };
