import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts";
import "./login.css";
import { loginService } from "../../../services";
import { useDocumentTitle } from "../../../hooks";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser, setEncodedToken } = useAuth();
  useDocumentTitle("Login");
  const loginHandler = (e) => {
    e.preventDefault();
    loginService(email, password, setUser, navigate, setEncodedToken);
  };
  const guestLoginHandler = () => {
    setEmail("anuragsharma0711@gmail.com");
    setPassword("anurag12");
  };

  return (
    <div>
      <form className="auth-container" onSubmit={loginHandler}>
        <h4 className="text-center">Login</h4>
        <div className="user-details flex-column">
          <label htmlFor="email" className="input-label text-base">
            Email:
          </label>
          <input
            name="email"
            type="email"
            className="input-area text-base"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="input-label text-base">
            Password:
          </label>
          <input
            name="password"
            type="password"
            className="input-area text-base"
            required
            minLength="4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <div className="flex-row">
            <span>
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                value="remember-me"
              />
              <label htmlFor="remember-me">Remember Me</label>
            </span>
            <span className="login-preference text-primary">
              <a href="#"> Forgot Password</a>
            </span>
          </div> */}
          <button className="btn btn-solid-primary text-base text-white">
            Login
          </button>
          <button
            className="btn btn-outlined-secondary text-base"
            onClick={guestLoginHandler}
          >
            Login as guest user
          </button>
          <button className="link-btn text-base ">
            <Link to="/signup">
              Create Account <i className="fa-solid fa-angle-right"></i>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export { Login };
