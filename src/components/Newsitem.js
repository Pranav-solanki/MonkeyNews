import React from "react";

export default function Newsitem(props) {
  return (
    <>
      <div className="card container my-3" style={{"width": "18rem"}}>
        <img src={props.imageurl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
