import React from "react";

const Marquee = () => {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-container {
          overflow-x: auto;
          white-space: nowrap;
          width: 100%;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .marquee-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .marquee-track {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }

        .marquee-content {
          display: inline-block;
        }

        .marquee-item {
          margin: 0 3rem;
          font-size: 3.25rem;
          display: inline-block;
        }
      `}</style>

      <div className="marquee-container text-white">
        <div className="marquee-track">
          <div className="marquee-content">
            <img
              src="https://images.seeklogo.com/logo-png/43/2/knust-logo-png_seeklogo-432012.png"
              className="marquee-item"
              alt="KNUST"
            />
            <img
              src="https://pbs.twimg.com/profile_images/1708769642938765312/D0IerrcH_400x400.jpg"
              className="marquee-item"
              alt="Profile"
              width={200}
            />
            <img
              src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png"
              className="marquee-item"
              alt="Samsung"
              width={250}
            />
          </div>
          <div className="marquee-content" aria-hidden="true">
            <img
              src="https://images.seeklogo.com/logo-png/43/2/knust-logo-png_seeklogo-432012.png"
              className="marquee-item"
              alt=""
            />
            <img
              src="https://pbs.twimg.com/profile_images/1708769642938765312/D0IerrcH_400x400.jpg"
              className="marquee-item"
              alt=""
              width={200}
            />
            <img
              src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png"
              className="marquee-item"
              alt=""
              width={250}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
