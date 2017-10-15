import {combineReducers} from 'redux';  
import product from './productReducers';
import language from './localisationReducer';

const rootReducer = combineReducers({  
  product,
  language
})

export default rootReducer;