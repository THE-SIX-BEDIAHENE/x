// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/ContactPage";

// Components
import LoadingScreen from "./components/LoadingScreen";
import Blogspage from "./pages/BlogsPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for development (optional)
  useEffect(() => {
    // Remove this in production unless you want a minimum loading time
    const timer = setTimeout(() => {}, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen onVideoEnd={handleVideoEnd} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<Blogspage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;