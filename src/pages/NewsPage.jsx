import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { useTranslation } from "react-i18next";
import { apiService } from "../services/api";
import { toast } from 'react-toastify';

const NewsPage = () => {
  const { t } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const newsData = await apiService.getNews();
      setArticles(newsData);
    } catch (error) {
      toast.error('Failed to load news articles');
      console.error('Fetch news error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="text-center px-4 pt-35 md:pt-25">
        <span className="text-[#2E3E99] font-bold text-4xl">
          {t("news.title")}
        </span>
        <h1 className="text-2xl font-bold mt-2 mb-4">
          {t("news.subtitle")}
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          {t("news.description")}
        </p>
      </section>

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        /* Blog Cards */
        <section className="grid grid-cols-1 md:mt-10 md:grid-cols-2 gap-8 px-6 pb-20 max-w-6xl mx-auto">
          {articles.map((post, index) => (
            <Motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-300 hover:scale-105 cursor-pointer block"
              >
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="rounded-md mb-4 transition duration-300 transform hover:scale-105"
                  />
                  <span className="text-sm text-gray-400 uppercase">
                    {post.category || t(`news.articles.${index}.category`)}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 text-black">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {post.content}
                  </p>
                </div>
              </a>
            </Motion.div>
          ))}
        </section>
      )}

      <Footer />
    </Motion.div>
  );
};

export default NewsPage;
