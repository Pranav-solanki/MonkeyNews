import React from "react";
import Newsitem from "./Newsitem";
import { useState,useEffect } from "react";

export default function News() {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_c0b163a1315d4364a6752ca770d9fa7b&language=en"
        );
        const data = await response.json();
        console.log(data.results[0]); // See what the API returns
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
        <div className="col-md-4">
          <Newsitem
            title="mytitle"
            description="mydescription"
            imageurl="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          />
        </div>
        <div className="col-md-4">
          <Newsitem
            title="mytitle"
            description="mydescription"
            imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"
          />
        </div>
        <div className="col-md-4">
          <Newsitem
            title="mytitle"
            description="mydescription"
            imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Newsitem
            title="mytitle"
            description="mydescription"
            imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"
          />
        </div>
        <div className="col-md-4">
          <Newsitem
            title="mytitle"
            description="mydescription"
            imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"
          />
        </div>
        <div className="col-md-4">
          <Newsitem
            title="mytitle"
            description="mydescription"
            imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"
          />
        </div>
      </div>
    </div>
  );
}
