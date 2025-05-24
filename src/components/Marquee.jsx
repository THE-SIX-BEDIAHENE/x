import React from "react";

const Marquee = () => {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }
        .marquee-container {
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-block;
          /* Make sure the duplicated content sits inline */
        }
        .marquee-item {
          margin: 0 3rem;
          font-size: 3.25rem;
          display: inline-block;
        }
      `}</style>

      <div className="marquee-container text-white">
        <div className="animate-marquee">
          <div className="marquee-content">
            <img
              src="https://images.seeklogo.com/logo-png/43/2/knust-logo-png_seeklogo-432012.png"
              className="marquee-item"
              alt="This is a simple marquee"
            />
            <img
              src="https://pbs.twimg.com/profile_images/1708769642938765312/D0IerrcH_400x400.jpg"
              className="marquee-item"
              alt="Scrolling smoothly left"
              width={200}
            />
            <img
              src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png"
              className="marquee-item"
              alt="Tailwind + React"
              width={250}
            />
          </div>
          <div className="marquee-content" aria-hidden="true">
            <img
              src="https://images.seeklogo.com/logo-png/43/2/knust-logo-png_seeklogo-432012.png"
              className="marquee-item"
              alt="This is a simple marquee"
            />{" "}
   <img
              src="https://pbs.twimg.com/profile_images/1708769642938765312/D0IerrcH_400x400.jpg"
              className="marquee-item"
              alt="Scrolling smoothly left"
              width={200}
            />             <img
              src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png"
              className="marquee-item"
              alt="Tailwind + React"
              width={250}
            />
            <img className="marquee-item" alt="No config file" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
