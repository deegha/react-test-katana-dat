import * as types from '../actions/actionTypes';  

export default function productReducer(state = [], action) {  
  switch(action.type) {
    case types.PRODUCT_DETAIL_SUCCESS:
      return action.product 
    case types.PRODUCT_DETAIL_ERROR:
      return state
    default: 
      return state;
  }
}