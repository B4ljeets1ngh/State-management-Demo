import React from "react";
import theme from "../../themes/theme";
import {getProduct} from '../../actions/products.acions';
import { connect } from 'react-redux';


class ProductComponent extends React.Component {
  componentDidMount(){
    this.props.getProducts();
  }

  render() {
    return( 
      this.props.isLoggedIn ? (
      <React.Fragment>
        <h1>PRODUCTS</h1>
        <div className="container">
          <div className="row">
            {this.props.products && this.props.products.map((post,idx) => (
                <div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={idx}>
                  <div
                    className="card p-1"
                    style={
                      this.props.isDark
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
            ))}
          </div>
        </div>
      </React.Fragment>
    ) : (
      <h1>PLEASE LOGIN FIRST</h1>
    )
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return { 
    isLoggedIn: state.login.isLoggedIn,
    products : state.products.products,
    isDark : state.header.isDark,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts : () => dispatch(getProduct.getProducts()),
  }
}

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
export default Products;