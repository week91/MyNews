import { combineReducers } from 'redux';
import {layoutReducer} from './layout/reducer'
import NewsDetail from '../components/news/newsDetail/NewsDetail';
import{detailReducer} from './news/reducer'


export default combineReducers({
    layout: layoutReducer,
    newsDetail: detailReducer,
  
  });
  