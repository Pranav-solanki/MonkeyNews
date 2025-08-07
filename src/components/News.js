import React from "react";
import Newsitem from "./Newsitem";

export default function News() {
  return (
    <div>
      <h2 className="text-center">MonkeyNews-Top headline</h2>
      <div className="row">
        <div className="col-md-4">
          <Newsitem />
        </div>
        <div className="col-md-4">
          <Newsitem />
        </div>
        <div className="col-md-4">
          <Newsitem />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Newsitem />
        </div>
        <div className="col-md-4">
          <Newsitem />
        </div>
        <div className="col-md-4">
          <Newsitem />
        </div>
      </div>
    </div>
  );
}
