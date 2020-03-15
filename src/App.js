import React, { lazy, Suspense } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import theme from "./themes/theme";
import store from './helpers/store';

const Header = lazy(() =>
  import(/* webpackChunkName: "Header" */ "./components/Header/Header")
);

const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ "./components/Login/Login")
);

const Products = lazy(() =>
  import(/* webpackChunkName: "Products" */ "./components/Products/Products")
);

const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "./components/Home/Home")
);

class AppComponent extends React.Component {

  render() {
    console.log(store.getState())
    store.subscribe(() => console.log(store.getState()));

    // console.log(this.props);
    return (
      <BrowserRouter>
        <Suspense fallback={<h1>loading</h1>}>
          <Header />
          <div
            style={
              this.props.isDark
                ? {
                    backgroundColor: theme.dark.bg,
                    height: "100vh",
                    color: theme.dark.text
                  }
                : {
                    backgroundColor: theme.light.bg,
                    height: "100vh",
                    color: theme.light.text
                  }
            }
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/products" component={Products} />
            </Switch>
          </div>
        </Suspense>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { 
    isDark : state.header.isDark,
  };
};

const App = connect(mapStateToProps)(AppComponent);
export default App;