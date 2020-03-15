import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {toggleThemeAction} from '../../actions/header.actions';

class HeaderComponent extends React.Component {
  componentDidMount(){
    // this.props.toggleTheme();
  }

  render() {
    // console.log('header class', this.props);
    return (
      <nav
        className={
          this.props.isDark
            ? "navbar navbar-expand-lg navbar-dark bg-dark"
            : "navbar navbar-expand-lg navbar-light bg-light"
        }
      >
        <div className="" id="navbarNavAltMarkup">
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
              className={this.props.isDark ? "btn btn-light" : "btn btn-dark"}
              onClick={() => {
                this.props.toggleTheme(this.props.isDark);
              }}
            >
              {this.props.isDark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { 
    isLoggedIn: state.login.isLoggedIn,
    isDark : state.header.isDark,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme : (data) => dispatch(toggleThemeAction.toggleTheme(data)),
  }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
export default Header;
