import{ GET_NEWS_BYID, LAUNCH_LOADING, STOP_LOADING  } from './actions'



const initiaState = {
  NewsDetail: {},
  loading:false,
};

export const detailReducer=(state = initiaState,action)=>{
  switch (action.type) {
    case LAUNCH_LOADING:
      return {...state,  loading: true }
   
      case STOP_LOADING:
        return {...state,  loading: false };
   
    case GET_NEWS_BYID:
      return {...state, NewsDetail: action.payload };
   
    default:
      return state;
  }
};

