import React from "react";
import videoSrc from "./video.mp4";
import "../App.css";

const Background = () => {
  return (
    <>
      <video autoPlay loop muted className="video-background">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
