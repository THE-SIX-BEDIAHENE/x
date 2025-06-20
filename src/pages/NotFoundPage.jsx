import React from "react";
import { Link, useNavigate } from "react-router";
import {
  FaHome,
  FaArrowLeft,
  FaCompass,
  FaNewspaper,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const navigationLinks = [
    {
      to: "/about",
      label: "About Us",
      icon: FaCompass,
      color: "from-blue-400 to-blue-600",
    },
    {
      to: "/projects",
      label: "Projects",
      icon: FaProjectDiagram,
      color: "from-purple-400 to-purple-600",
    },
    {
      to: "/news",
      label: "News",
      icon: FaNewspaper,
      color: "from-green-400 to-green-600",
    },
    {
      to: "/contact",
      label: "Contact",
      icon: FaEnvelope,
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900 text-white font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center space-y-8">
            {/* 404 Number */}
            <div className="relative">
              <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 select-none">
                404
              </h1>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-t from-gray-900 to-transparent blur-2xl" />
            </div>

            {/* Message */}
            <div className="space-y-4 backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-light">
                Oops! Lost in Space
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                The page you're looking for has drifted into a black hole. Let's
                help you find your way back.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link
                  to="/"
                  className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <FaHome className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-medium">Return Home</span>
                </Link>
                <button
                  onClick={goBack}
                  className="group flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <FaArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="font-medium">Go Back</span>
                </button>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
              {navigationLinks.map(({ to, label, icon: Icon, color }) => (
                <Link
                  key={to}
                  to={to}
                  className="group relative overflow-hidden rounded-xl bg-gray-800 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <div className="relative flex items-center gap-3">
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      {label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add styles for the animated stars */}
      <style jsx>{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          opacity: 0.3;
          animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
