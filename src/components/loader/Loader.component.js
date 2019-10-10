import React from "react";
import Loader from "react-loader-spinner";
import "./Loader.css";

function Loading() {
  return (
    <div className='loader-container'>
      <Loader
        type="Puff"
        color="#FFFFFF"
        height={30}
        width={30}
      />
    </div>
  );
}

export default Loading;
