import React from "react";
import spinner from "./loading.gif";
export default function Loading() {
  return (
    <div className="text-center">
      <img src={spinner} alt="Loading" />
    </div>
  );
}
