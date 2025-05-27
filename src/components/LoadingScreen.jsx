// src/components/LoadingScreen.js
import React from "react";

const LoadingScreen = ({ onVideoEnd }) => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={onVideoEnd}
      >
        <source src="/Open Splash 1 (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingScreen;