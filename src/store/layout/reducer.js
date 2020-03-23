
import {GET_ALL_NEWS,LAUNCH_LOADING, STOP_LOADING} from './actions.js'

const initiaState = {
  loading: false,
   News: [
    
  ]
};

export const layoutReducer=(state = initiaState,action)=>{
  switch (action.type) {
    case GET_ALL_NEWS:
      return {...state, News: action.payload };
      case LAUNCH_LOADING:
        return {...state,  loading: true };
      case STOP_LOADING:
        return {...state,  loading: false };
    default:
      return state;
  }
};