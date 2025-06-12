import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./App.css";

// Components
import SplashScreen from "./components/SplashScreen";
import PageLoader from "./components/PageLoader";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/LoginPage";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

function AppRoutes() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);
  const [splashReady, setSplashReady] = useState(false);
  const hasPlayedRef = useRef(false); // Track whether splash has played in session

  useEffect(() => {
    const isInitialLoad =
      performance.getEntriesByType("navigation")[0]?.type === "navigate" ||
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    const isFirstVisit = !hasPlayedRef.current;

    if (location.pathname === "/" && isInitialLoad && isFirstVisit) {
      setShowSplash(true);
      hasPlayedRef.current = true;
    } else {
      setSplashReady(true);
    }
  }, [location.pathname]);

  const handleVideoEnd = () => {
    setShowSplash(false);
    setSplashReady(true);
  };

  if (showSplash) {
    return <SplashScreen onVideoEnd={handleVideoEnd} />;
  }

  if (!splashReady && location.pathname === "/") {
    return null;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/admin" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

function AppWrapper() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default AppWrapper;
