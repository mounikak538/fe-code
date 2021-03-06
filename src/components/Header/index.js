import React from "react";
import "./_style.scss";
/**
 * Method used for   header creation which has  basic details
 * @function Header
 */
const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-style ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="navbar-brand"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span>
          <span className="app-name">Employeement Form</span>
        </span>
      </div>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01"></div>
    </nav>
  );
};

export default Header;
