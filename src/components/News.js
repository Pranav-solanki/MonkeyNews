import React from "react";
import Newsitem from "./Newsitem";

export default function News() {
  return (
    <div>
      <h2 className="text-center">MonkeyNews-Top headline</h2>
      <div className="row">
        <div className="col-md-4">
          <Newsitem title="mytitle" description="mydescription" imageurl="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"/>
        </div>
        <div className="col-md-4">
           <Newsitem title="mytitle" description="mydescription" imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"/>
        </div>
        <div className="col-md-4">
          <Newsitem title="mytitle" description="mydescription" imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
           <Newsitem title="mytitle" description="mydescription" imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"/>
        </div>
        <div className="col-md-4">
         <Newsitem title="mytitle" description="mydescription" imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"/>
        </div>
        <div className="col-md-4">
          <Newsitem title="mytitle" description="mydescription" imageurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw3Sv_CRZnpBHAv203hlI4cS&ust=1754626111454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDFjePp944DFQAAAAAdAAAAABAE"/>
        </div>
      </div>
    </div>
  );
}
