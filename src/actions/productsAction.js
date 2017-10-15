import ProductApi from '../api/productApi';
import * as types from './actionTypes';

export function productDetails(id) {
  return (dispatch) => {
    return ProductApi.productDetails(id).then((product)=>{ 
      dispatch(productDetailsSuccess(product));
    }).catch(error => {
      dispatch(productDetailsError())
    });
  }
}

export function productDetailsSuccess(product) {  
    return {type: types.PRODUCT_DETAIL_SUCCESS, product};
}

export function productDetailsError(){
  return {type: types.PRODUCT_DETAIL_ERROR}
}
