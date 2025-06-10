// src/components/LoadingScreen.js
import React from "react";

const SplashScreen = ({ onVideoEnd }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
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

export default SplashScreen;
