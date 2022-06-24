import { Link, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import { authReducer } from "../../../reducers";
import { useAuth } from "../../../contexts";
import { signupService } from "../../../services";
import { useDocumentTitle } from "../../../hooks";
const Signup = () => {
  const [userState, userDispatch] = useReducer(authReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { email, firstName, lastName, password, confirmPassword } = userState;
  const { setUser } = useAuth();
  const [formError, setFormError] = useState(false);
  useDocumentTitle("Signup");
  const singUpHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setFormError(false);
      signupService(email, firstName, lastName, password, setUser, navigate);
    } else {
      setFormError(true);
    }
  };
  return (
    <div>
      <form className="auth-container" onSubmit={(e) => singUpHandler(e)}>
        <h4 className="text-center">Signup</h4>

        <div className="user-details flex-column">
          <label htmlFor="email" className="input-label text-base">
            First Name :
          </label>
          <input
            name="name"
            type="text"
            className="input-area text-base"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) =>
              userDispatch({ type: "FIRST_NAME", payload: e.target.value })
            }
            required
          />
          <label htmlFor="email" className="input-label text-base">
            Last Name :
          </label>
          <input
            name="name"
            type="text"
            className="input-area text-base"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) =>
              userDispatch({ type: "LAST_NAME", payload: e.target.value })
            }
            required
          />

          <label htmlFor="email" className="input-label text-base">
            Email :
          </label>
          <input
            name="email"
            type="email"
            className="input-area text-base"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) =>
              userDispatch({ type: "EMAIL", payload: e.target.value })
            }
          />

          <label htmlFor="password" className="input-label text-base">
            Password :
          </label>
          <input
            name="password"
            type="password"
            className="input-area text-base"
            required
            minLength="4"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              userDispatch({ type: "PASSWORD", payload: e.target.value })
            }
          />
          <label htmlFor="password" className="input-label text-base">
            Confirm Password :
          </label>
          <input
            name="password"
            type="password"
            className="input-area text-base"
            required
            minLength="4"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              userDispatch({
                type: "CONFIRM_PASSWORD",
                payload: e.target.value,
              })
            }
          />
          {formError ? (
            <div className=" error-msg text-base">
              Please enter the same password
            </div>
          ) : (
            ""
          )}
          <div className="flex-row">
            <span>
              <input
                type="checkbox"
                id="term-condition"
                name="term-condition"
                value="term-condition"
                required
              />
              <label className="ml-1" htmlFor="term-condition">
                I accept all term and condition
              </label>
            </span>
          </div>
          <button className="btn btn-solid-primary text-base text-white">
            Create New Account
          </button>
          <button className="link-btn text-base ">
            <Link to="/login">
              Already have an account
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export { Signup };
