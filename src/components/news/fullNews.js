import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "./newsDetail/newsCard/NewsCard";

function FullNews(props) {
  const { news } = props;

  return (
    <div className="dss">
      {news.map(p => {
        return (
        <Link key={p.id}to={`/news/${p.id}`}>
            <NewsCard key={p.id} news={p} />
          </Link>
        );
      })}
    </div>
  );
}
export default FullNews;
