import { combineReducers } from 'redux';
import {layoutReducer} from './layout/reducer'
import{detailReducer} from './news/reducer'
import{reducerAutAuth} from './registr/reducer'


export default combineReducers({
    layout: layoutReducer,
    newsDetail: detailReducer,
    RegistLoginOut:reducerAutAuth,
    
  });
  