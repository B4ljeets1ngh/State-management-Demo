import React from "react";
import { MyContext } from "../../App";
import theme from "../../themes/theme";

export default class Login extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {values =>
          values.isLoggedIn ? (
            <React.Fragment>
              <h1>PRODUCTS</h1>
              <div className="container">
                <div className="row">
                  {values.posts.map(post => (
                    <React.Fragment>
                      <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                        <div
                          className="card p-1"
                          style={
                            values.isDark
                              ? {
                                  backgroundColor: theme.dark.bg,
                                  color: theme.dark.text,
                                  borderColor: theme.dark.text
                                }
                              : {
                                  backgroundColor: theme.light.bg,
                                  color: theme.light.text,
                                  borderColor: theme.light.text
                                }
                          }
                        >
                          <img
                            className="card-img-top"
                            src={post.thumbnailUrl}
                            alt="..."
                          />
                          <div className="card-block">
                            <h5 className="text-bold">{post.title}</h5>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ) : (
            <h1>PLEASE LOGIN FIRST</h1>
          )
        }
      </MyContext.Consumer>
    );
  }
}
