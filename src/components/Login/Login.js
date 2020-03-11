import React from "react";

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: this.state.isLoggedIn
    });
  };
  render() {
    return (
      <div className="col-sm-12">
        <p>Click to log in and log out</p>
        <button
          className={value.isDark ? "btn btn-light" : "btn btn-dark"}
          onClick={() => {
            this.handleLogin();
            value.toggleLogin();
          }}
        >
          {this.state.isLoggedIn
            ? "LOG OUT " + value.isLoggedIn
            : "LOG IN " + value.isLoggedIn}
        </button>
      </div>
    );
  }
}
