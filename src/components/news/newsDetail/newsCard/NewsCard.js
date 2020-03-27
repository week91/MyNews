import React from 'react';
import '../../../../App.css'
import { Card } from 'antd';
import {BrowserRouter} from "react-router-dom";

const { Meta } = Card;
function NewsCard(props) {

  const {news}=props
  
  return (
    <div>
      <BrowserRouter>
        <div>
        <Card
       // loading="true"
          hoverable
          style={{ width: 330, height: 350 }}
          cover={
            <img
              alt="example"
              style={{ width: 330, height: 250 }}
              src="data:image/jpeg;base64,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"
            />
          }
        >
          <Meta title={news.newsTitle} description={news.dateCreate} />
        </Card>
       
        </div>
      </BrowserRouter>
    </div>
  );
}
export default NewsCard;