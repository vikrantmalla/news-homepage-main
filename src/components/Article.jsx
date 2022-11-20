import React from "react"
import { ArticleData } from "./data/Article";

const Article = () => {
  return <aside className="right-content">
    <h1 className="article-status"> New </h1>
    <div className="article-wrapper">
{
    ArticleData.map((article) => {
        const {id, title, para} = article
        return(
            <div key={id} className="article">
                <h1>{title}</h1>
                <p>{para}</p>
            </div>
        )
    })
}
    </div>
  </aside>;
};

export default Article;
