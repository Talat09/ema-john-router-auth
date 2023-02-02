import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./SignUp.css";
const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    if (password.length < 6) {
      setError("Password must be at least 6 Characters");
      return;
    }
    if (password !== confirm) {
      setError("Your password did not match from previous password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error("error is: ", error));
  };
  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSignUpSubmit}>
        <div className="signup-form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your email"
            required
          />
        </div>
        <div className="signup-form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your email"
            required
          />
        </div>
        <div className="signup-form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Enter Your email"
            required
          />
        </div>
        <input className="btn-signup" type="submit" value="Sign Up" />
        <p>
          Already have an account?
          <Link className="already-account-text" to="/login">
            Login
          </Link>
        </p>
        <p className="error-text">{error}</p>
      </form>
    </div>
  );
};

export default SignUp;
<h1>This is sign up</h1>;
