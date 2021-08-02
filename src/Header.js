import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import Login from './Login';

function Header() {
  return (
    <div className="container2">
      <Link to="/">
        <h3 className="header__home">Home</h3>
      </Link>
      <Link to="/login">
        <h3 className="header__login">Login</h3>
      </Link>
    </div>
  );
}

export default Header;
