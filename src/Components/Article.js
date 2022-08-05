import React, { useEffect, useState } from "react";
import axios from "../Js/axios";
import "./Article.css";

function Section({ fetchUrl, fetchSideUrl, title }) {
  const [articles, setViewd] = useState([]);
  const [sideArticles, setSideViewd] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const requestSide = await axios.get(fetchSideUrl);
      setViewd(request.data.results);
      setSideViewd(requestSide.data.results);
      return request, requestSide;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="articles">
      <div className="articles__normal">
        {articles.slice(0, 8).map((article, id) => {
          let article__img = article.multimedia[0]
            ? article.multimedia[0].url
            : "";
          return (
            <div
              className="article"
              key={id}
              style={{ display: article__img ? "flex" : "none" }}
            >
              <a
                href={article.url}
                style={{ display: article__img ? "flex" : "none" }}
              >
                <div className="article__desc">
                  <h2 className="title">{article.title}</h2>
                  <p>{article.abstract}</p>
                </div>
                <img src={article__img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
      <div className="sideArticles">
        {sideArticles.slice(0, 13).map((side_article, id) => {
          let sidearticle__img = side_article.media[0]
            ? side_article.media[0]["media-metadata"][1].url
            : "";
          return (
            <div className="side__article" key={id}>
              <a href={side_article.url}>
                <img src={sidearticle__img} alt="" />
                <div className="side__desc">
                  <h2>{side_article.title}</h2>
                  <p>{side_article.abstract}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section;
