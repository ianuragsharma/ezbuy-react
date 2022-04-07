import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="auth-container">
        <h4 className="text-center">Signup</h4>

        <div className="user-details flex-column">
          <label htmlFor="email" className="input-label text-base">
            Email:
          </label>
          <input
            name="email"
            type="email"
            className="input-area text-base"
            placeholder="Enter Email"
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
            placeholder="Enter Password"
          />
          <div className="flex-row">
            <span>
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                value="remember-me"
              />
              <label htmlFor="remember-me">
                I accept all term and condition
              </label>
            </span>
          </div>
          <button className="btn btn-solid-primary text-base text-white">
            Create New Account
          </button>
          <button className="link-btn text-base ">
            <Link to="/login">
              Already have an account{" "}
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Signup };
