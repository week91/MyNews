import{ GET_NEWS_BYID } from './actions'



const initiaState = {
  NewsDetail: {}
  
};

export const detailReducer=(state = initiaState,action)=>{
  switch (action.type) {
    case GET_NEWS_BYID:
      return {...state, NewsDetail: action.payload };
   
    default:
      return state;
  }
};

