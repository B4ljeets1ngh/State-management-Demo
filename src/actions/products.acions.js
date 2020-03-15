import axios from 'axios';
import {FETCH_PRODUCTS,FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../helpers/actionConstants';

export const getProduct = {
    getProducts,
}

function getProducts(){
    return function (dispatch) {
        dispatch({type : FETCH_PRODUCTS});

        axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4')
        .then(res => {
            // console.log(res)
            dispatch({type : FETCH_PRODUCTS_SUCCESS, payload : res.data})
        })
        .catch(err => {
            dispatch({type : FETCH_PRODUCTS_ERROR, payload : err.response});
        })
    }
}