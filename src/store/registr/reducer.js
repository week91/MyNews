import{ LOGIN_USER } from '../author/actions'


const initialState = {
    currentUser: {}
  }
  
  export default function reducerRegistr(state = initialState, action) {
      switch (action.type) {
        case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        default:
          return state;
      }
    }