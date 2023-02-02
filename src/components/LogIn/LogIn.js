import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./LogIn.css";
const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogInSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.error("error is: ", error));
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form className="form-div" onSubmit={handleLogInSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
        <p>
          New to Ema-john?{" "}
          <Link className="create-account-text" to="/signup">
            Create New Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
