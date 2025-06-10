import React from "react";
import { Link, useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800 text-white font-sans p-8">
      <div className="text-center max-w-2xl bg-white bg-opacity-10 rounded-2xl backdrop-blur-lg p-12 border border-white border-opacity-20 shadow-2xl">
        
        {/* 404 Error Code */}
        <div className="text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
          404
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-light mb-4">Page Not Found</h1>
        
        {/* Description */}
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <Link 
            to="/" 
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            Go Home
          </Link>
          <button 
            onClick={goBack} 
            className="px-8 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg border border-white border-opacity-30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Go Back
          </button>
        </div>

        {/* Navigation Suggestions */}
        <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-8">
          <h3 className="text-xl font-medium mb-6 text-yellow-300">
            You might be looking for:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { to: "/about", label: "About Us" },
              { to: "/projects", label: "Projects" },
              { to: "/news", label: "News" },
              { to: "/contact", label: "Contact" }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all duration-200 transform hover:translate-x-1 hover:shadow-md border border-white border-opacity-20"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 bg-opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 bg-opacity-10 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;