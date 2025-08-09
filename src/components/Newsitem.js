import React from "react";
// import fallbackimg from "./quiz3.jpeg";

export default function Newsitem(props) {
  return (
    <div className="card h-100 d-flex flex-column">
      <img
        src={props.imageurl}
        className="card-img-top"
        alt="News"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="mt-auto">
          <a
            href={props.newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
