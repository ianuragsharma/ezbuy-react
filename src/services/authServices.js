import axios from "axios";
import { successToast, errorToast } from "../helper";
const loginService = async (
  email,
  password,
  setUser,
  navigate,
  setEncodedToken
) => {
  try {
    const { data } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    setUser(data.foundUser);
    localStorage.setItem("token", data.encodedToken);
    navigate("/");
    successToast(
      `Welcome back ${data.foundUser.firstName} ${data.foundUser.lastName}`
    );
  } catch (error) {
    errorToast("Email or password is incorrect");
  }
};

const signupService = async (
  email,
  firstName,
  lastName,
  password,
  setUser,
  navigate
) => {
  try {
    const { data } = await axios.post("/api/auth/signup", {
      email,
      firstName,
      lastName,
      password,
    });
    setUser(data.createdUser);
    localStorage.setItem("token", data.encodedToken);
    navigate("/");
    successToast(
      `Welcome to ezBuy ${data.createdUser.firstName} ${data.createdUser.lastName}`
    );
  } catch (error) {
    error.response.status === 422
      ? errorToast("Email already Exist")
      : errorToast(error);
  }
};
export { loginService, signupService };
