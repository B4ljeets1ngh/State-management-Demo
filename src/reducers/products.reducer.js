import {FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR} from '../helpers/actionConstants';

const initialState = {
    fetchingProducts : null,
    fetchedProducts : null,
    products : [],
    error : null
}

export function getProducts(state = initialState, action){

  switch(action.type){
      case FETCH_PRODUCTS: {
            return {
                ...state,
                fetchingProducts : true,
                fetchedProducts : false,
                products : null,
            };
        }
        case FETCH_PRODUCTS_SUCCESS : {
            return {
                ...state,
                fetchingProducts : false,
                fetchedProducts : true,
                products : action.payload,
            };
        }
        case FETCH_PRODUCTS_ERROR : {
            return {
                ...state,
                fetchingProducts : false,
                fetchedProducts : true,
                error : action.payload,
            };
        }
        default :
        return state;
    }
}