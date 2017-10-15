import * as types from '../actions/actionTypes';  

export default function localisationReducer(state = [], action) {  
  switch(action.type) {
    case types.LOCALISATION_SET_LANG_PACK:
      return action.langPack 
    default: 
      return state;
  }
}