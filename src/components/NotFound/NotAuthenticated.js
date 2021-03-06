import React from "react";
import { Link } from "react-router-dom";
import "./_style.scss";
/**
 * Method used for display when user not authenticated
 * @function NotAuthenticated
 */
const NotAuthenticated = () => {
  return (
    <div className="centered notFoundStyle">
      <div>Not Authorized</div>
      <div className="register-text">
        Do Not have Account?
        <span className=" register-link">
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};
export default NotAuthenticated;
