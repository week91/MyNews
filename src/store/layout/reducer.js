
import {GET_ALL_NEWS} from './actions.js'

const initiaState = {
  News: [
    
  ]
};

export const layoutReducer=(state = initiaState,action)=>{
  switch (action.type) {
    case GET_ALL_NEWS:
      return {...state, News: action.payload };
   
    default:
      return state;
  }
};