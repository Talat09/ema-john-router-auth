import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showicon, setShowicon] = useState(false);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div
        className={showicon ? "nav-link-mobile nav-link-mobile a" : "nav-link"}
      >
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button className="signout-btn" onClick={logOut}>
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}

        <span className="user">{user?.email}</span>
      </div>
      <div className="menu-icon">
        <FontAwesomeIcon
          onClick={() => setShowicon(!showicon)}
          icon={faBars}
        ></FontAwesomeIcon>
      </div>
    </nav>
  );
};

export default Header;
