import React from "react";
import {toggleLoginAction} from '../../actions/login.actions'
import { connect } from "react-redux";

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    let isLoggedIn = this.props.isLoggedIn;
    this.props.toggleLogin(!isLoggedIn);
  };

  render() {
    // console.log('state',this.state.isLoggedIn,'props loggedin', this.props.isLoggedIn, this.props.isDark)
    return (
      <div className="col-sm-12">
        <p>Click to log in and log out</p>
        <button
          className={this.props.isDark ? "btn btn-light" : "btn btn-dark"}
          onClick={() => {
            this.handleLogin();
          }}
        >
          {this.props.isLoggedIn
            ? 'LOG OUT '
            : 'LOG IN '}
        </button>
      </div>
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
    toggleLogin : (data) => dispatch(toggleLoginAction.toggleLogin(data)),
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default Login;
