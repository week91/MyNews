import React from 'react';
import {Link,Route} from "react-router-dom";
import NewsCard from './newsDetail/newsCard/NewsCard'
import { Switch } from 'antd';
import NewsDetail from './newsDetail/NewsDetail'


function FullNews(props) {
    const {news}=props;
    
    return  ( 
   
      <div className="dss"> 
      {news.map(p => {
         return  (
         <Link to={`/news/${p.id}`}><NewsCard key={p.id}  news={p} /></Link>
         )
        })}
        
  </div>
    );
  }
  export default FullNews;