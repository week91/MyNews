import{ LOGIN_USER } from './actions'


const initialState = {
    currentUser: {
    }
  }
  
  export function reducerAuth(state = initialState, action) {
      switch (action.type) {
        case LOGIN_USER:
          return {...state, currentUser: action.payload}
        default:
          return state;
      }
    }