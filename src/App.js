import React, { lazy, Suspense } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import theme from "./themes/theme";

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

export const MyContext = React.createContext({ isLoggedIn: false });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isDark: true,
      posts: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4"
    );
    const posts = await response.json();
    this.setState({
      posts: posts
    });
  }

  toggleLogin = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  toggleTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark
    }));
  };

  render() {
    const { isLoggedIn, isDark, posts } = this.state;
    return (
      <MyContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          toggleLogin: this.toggleLogin,
          toggleTheme: this.toggleTheme,
          isDark: isDark,
          posts: posts
        }}
      >
        <BrowserRouter>
          <Suspense fallback={<h1>loading</h1>}>
            <Header />
            <div
              style={
                this.state.isDark
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
      </MyContext.Provider>
    );
  }
}

export default App;
