import axios from "axios";
import { successToast, errorToast } from "../helper";
const loginService = async (
  email,
  password,
  setUser,
  navigate,
  setEncodedToken,
  location
) => {
  try {
    const res = await axios.post("/api/auth/login", {
      email,
      password,
    });
    const { data } = res;
    if (res.status === 200) {
      setUser(data.foundUser);
      localStorage.setItem("token", data.encodedToken);
      navigate(location.state?.from?.pathname ?? "/", { replace: true });
      const { email, firstName, lastName } = data.foundUser;
      const userName = firstName + " " + lastName;
      localStorage.setItem(
        "ezBuy-user",
        JSON.stringify({ email, firstName, lastName })
      );
      successToast(`Welcome back ${userName}`);
    } else errorToast("Email or password is incorrect");
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
  navigate,
  location
) => {
  try {
    const {
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", {
      email,
      firstName,
      lastName,
      password,
    });
    setUser(createdUser);
    localStorage.setItem("token", encodedToken);
    const {
      email: userEmail,
      firstName: userFirstName,
      lastName: userLastName,
    } = createdUser;
    const userName = userFirstName + " " + userLastName;
    localStorage.setItem(
      "ezBuy-user",
      JSON.stringify({
        email: userEmail,
        firstName: userFirstName,
        lastName: userLastName,
      })
    );
    navigate(location.state?.from?.pathname ?? "/", { replace: true });
    successToast(`Welcome to ezBuy ${userName}`);
  } catch (error) {
    error.response.status === 422
      ? errorToast("Email already Exist")
      : errorToast(error);
  }
};
export { loginService, signupService };
