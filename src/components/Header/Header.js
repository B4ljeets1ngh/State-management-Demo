import React from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../App";

export default class Header extends React.Component {
  render() {
    return (
      <nav
        className={
          values.isDark
            ? "navbar navbar-expand-lg navbar-dark bg-dark"
            : "navbar navbar-expand-lg navbar-light bg-light"
        }
      >
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav text-center">
            <NavLink
              className="nav-item nav-link "
              to="/"
              activeClassName="active "
            >
              Home <span className="sr-only"></span>
            </NavLink>
            <NavLink
              className="nav-item nav-link "
              to="/login"
              activeClassName="active "
            >
              Login <span className="sr-only"></span>
            </NavLink>
            <NavLink
              className="nav-item nav-link "
              to="/products"
              activeClassName="active "
            >
              Products <span className="sr-only"></span>
            </NavLink>
            <button
              type="button"
              className={values.isDark ? "btn btn-light" : "btn btn-dark"}
              onClick={() => {
                values.toggleTheme();
              }}
            >
              {values.isDark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
