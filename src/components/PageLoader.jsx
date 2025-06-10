import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 dark:bg-gray-900 dark:bg-opacity-90">
      <div className="text-center">
        <div className="inline-block w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4 dark:border-gray-600 dark:border-t-blue-400"></div>
        <p className="text-gray-600 text-lg font-medium dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;