import React from "react";
import Newsitem from "./Newsitem";
import fallbackimg from "./quiz3.jpeg";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function News() {
  const [article, setarticle] = useState([]);
  const [pages, setPage] = useState(1);
  const [loading, setload] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setload(true);
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/latest?apikey=pub_c0b163a1315d4364a6752ca770d9fa7b&country=in&prioritydomain=top`
        );
        const data = await response.json();
        setload(false);
        console.log(data);
        setarticle(data.results);
        setPage(data.nextPage);
      } catch (error) {
        console.error("API error:", error);
      }
    };
    fetchNews();
  }, []);

  const handlenext = async () => {
    setload(true);
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/latest?apikey=pub_c0b163a1315d4364a6752ca770d9fa7b&country=in&prioritydomain=top&page=${pages}`
      );
      const data = await response.json();
      setload(false);
      setarticle(data.results);
      setPage(data.nextPage);
    } catch (error) {
      console.error("API error:", error);
    }
  };
  return (
    <>
      {loading && <Loading />}
      <div>
        <h2 className="text-center">MonkeyNews-Top headline</h2>
        <div className="row">
          {!loading &&
            article.map((news, index) => (
              <div
                className="col-md-4 mb-4"
                key={news.link}
                style={{ height: "500px", overflow: "hidden" }}
              >
                <Newsitem
                  newsUrl={news.link}
                  title={news.title ? news.title.slice(0, 50) : "not available"}
                  description={
                    news.description
                      ? news.description.slice(0, 90)
                      : "not available"
                  }
                  imageurl={news.image_url ? news.image_url : fallbackimg}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="container d-flex justify-content-end mb-3">
        <button type="button" className="btn btn-dark" onClick={handlenext}>
          Next &rarr;
        </button>
      </div>
    </>
  );
}
