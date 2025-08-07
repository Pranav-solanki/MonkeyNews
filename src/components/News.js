import React from "react";
import Newsitem from "./Newsitem";
import { useState, useEffect } from "react";

export default function News() {
  const [article, setarticle] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_c0b163a1315d4364a6752ca770d9fa7b&language=en"
        );
        const data = await response.json();
        setarticle(data.results);
        // console.log(data.results[0].title); // See what the API returns
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchNews();
  }, []);
  return (
    <div>
      <h2 className="text-center">MonkeyNews-Top headline</h2>
      <div className="row">
        {article.map((news, index) => (
          <div
            className="col-md-4 mb-4"
            key={news.link}
            style={{ height: "500px", overflow: "hidden" }}
          >
            <Newsitem
              newsUrl={news.link}
              title={news.title.slice(0,50)}
              description={news.description.slice(0,90)}
              imageurl={news.image_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
