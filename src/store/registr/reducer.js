import { LOGIN_USER } from "./actions";
import { LOGOUT_USER } from "./actions";
import { LOGIN_USER1 } from "./actions";
const initialState = {
  currentUser: {}
};

export const reducerAutAuth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state, currentUser: { 
          email: action.payload.email, 
          id: action.payload.id }
      };
      case LOGIN_USER1:
        return {
          ...state, currentUser: { email: action.payload.email}};
    case LOGOUT_USER:
      return { ...state, currentUser: {} };
    default:
      return state;
  }
};
