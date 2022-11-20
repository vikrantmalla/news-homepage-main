import React from "react";
import { NewsData } from "./data/News";

const News = () => {
  return (
    <section className="news-wrapper">
      {NewsData.map((news) => {
        const { id, title, para, img } = news;
        return (
          <div key={id} className="news">
            <div className="news-img">
              <img src={img} alt="news1" />
            </div>
            <div className="news-info">
                <p className="news-seq">0{id}</p>
                <h4>{title}</h4>
                <p>{para}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default News;
