import React from "react";
import { connect } from "react-redux";

class HomeComponent extends React.Component {
  render() {
    // console.log('home class',this.props);
    
    return (
      <>
        <h1>Home</h1>
        <h3>{"Loggedin = " + this.props.isLoggedIn}</h3>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { 
    isLoggedIn: state.login.isLoggedIn 
  };
};

const Home = connect(mapStateToProps)(HomeComponent);
export default Home;