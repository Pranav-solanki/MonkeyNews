import React from "react";
// import fallbackimg from "./quiz3.jpeg";

export default function Newsitem(props) {
  return (
    <div
      className="card h-100 d-flex flex-column position-relative"
    >
      <span
        className="position-absolute  translate-middle badge rounded-pill bg-danger"
        style={{ zIndex: 1,right:"10px"}}
      >
        {props.source}
      </span>
      <img
        src={props.imageurl}
        className="card-img-top"
        alt="News"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">
          <strong>
            {" "}
            <small className="text-muted">
              By {props.creator} on {new Date(props.pubDate).toGMTString()}
            </small>
          </strong>
        </p>
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
