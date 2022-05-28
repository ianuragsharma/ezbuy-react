import axios from "axios";
import { successToast, errorToast } from "../helper";
const addToCartService = async (product, cartDispatch) => {
  try {
    await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    cartDispatch({ type: "ADD_TO_CART", payload: product });
    successToast("Item Added to cart");
  } catch (error) {
    errorToast("Something went wrong");
  }
};
const removeFromCartService = async (product, cartDispatch) => {
  try {
    await axios.delete(`/api/user/cart/${product._id}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product._id,
    });
    successToast("Item removed from cart");
  } catch (error) {
    errorToast("Something went wrong");
  }
};
const updateQtyService = async (product, cartDispatch, updateType) => {
  try {
    await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: updateType,
        },
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    successToast(`Item quantity ${updateType}`);
    cartDispatch({
      type: updateType === "increment" ? "INCREASE_QTY" : "DECREASE_QTY",
      payload: product._id,
    });
  } catch (error) {
    errorToast("Something went wrong");
  }
};

export { addToCartService, removeFromCartService, updateQtyService };
