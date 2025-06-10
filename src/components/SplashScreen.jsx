import React, { useEffect, useRef } from "react";

const SplashScreen = ({ onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    // Attempt to play the video programmatically
    const playPromise = video.play();
    
    // Handle autoplay restrictions
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback for when autoplay is blocked
        video.muted = true;
        video.play();
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <video
        ref={videoRef}
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