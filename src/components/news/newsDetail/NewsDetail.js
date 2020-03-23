import React, { useState, useEffect } from 'react';
import '../../../App.css'
import { Typography  } from 'antd';
import CommentForm from '../comment/CommentsForm'
import { connect } from 'react-redux';
import {getNewsByIdData} from '../../../store/news/actions'


const { Title } = Typography;
function NewsDetail(props) {
  const { getNewsByIdData, NewsDetail } = props;
  useEffect(() => {
    getNewsByIdData(props.match.params.id);
  }, []);
  return (
    <div>
      <Title>
        <h1>Товар {NewsDetail.newsTitle} </h1>
      </Title>

      <p>{NewsDetail.bodyNews}</p>
      {NewsDetail.source}
      <CommentForm commentData={NewsDetail.commetns} />
    </div>
  );
}
 


const mapStateToProps = (state) => {
    return {
      NewsDetail:state.newsDetail.NewsDetail
    };
  };
  
  const mapDispatchToProps = {
    
    getNewsByIdData
    
  };
  
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);