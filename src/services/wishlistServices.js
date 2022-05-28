import axios from "axios";
import { successToast, errorToast } from "../helper";
const addToWishlistService = async (product, wishlistDispatch) => {
  try {
    await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    wishlistDispatch({ type: "TOGGLE_FAVOURATE", payload: product });
    successToast("Item Added to Wishlist");
  } catch (error) {
    errorToast("Something went wrong");
  }
};
const removeFromWishlistService = async (product, wishlistDispatch) => {
  try {
    await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    wishlistDispatch({ type: "TOGGLE_FAVOURATE", payload: product });
    successToast("Item removed from wishlist");
  } catch (error) {
    errorToast("Something went wrong");
  }
};
export { addToWishlistService, removeFromWishlistService };
