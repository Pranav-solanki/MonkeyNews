import React from "react";

export default function Newsitem(props) {
  return (
    <>
      <div className="card container my-3" style={{"width": "18rem"}}>
        <img src={props.imageurl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.description}
          </p>
          <a href="/" className="btn btn-sm btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
