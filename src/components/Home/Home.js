import React from "react";
import { MyContext } from "../../App";

export default class Home extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <>
            <h1>Home</h1>
            <h3>{"Loggedin = " + value.isLoggedIn}</h3>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}
