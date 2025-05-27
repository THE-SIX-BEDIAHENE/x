import React from "react";
import { Link } from "react-router";
import { motion as Motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const articles = [
  {
    id: 1,
    category: "Article",
    title: "The Future of AI Automation: How It’s Changing Business Operations",
    image: "/metric.jpg",
  },
  {
    id: 2,
    category: "Resources",
    title: "5 Must-Have AI Tools to Streamline Your Business tasks",
    image: "/metric.jpg",
  },
  {
    id: 3,
    category: "Article",
    title: "AI vs. Manual Work: Which One Saves More Time & Money?",
    image: "/metric.jpg",
  },
  {
    id: 4,
    category: "Article",
    title: "How AI is Transforming Workflow Automation for Businesses",
    image: "/metric.jpg",
  },
];

const BlogsPage = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="text-center px-4 pt-25">
        <span className=" text-[#2E3E99] font-bold text-4xl">Blogs</span>
        <h1 className="text-2xl font-bold mt-2 mb-4">
          Unlock Insights with Us
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Stay informed with the latest trends, insights, and strategies to
          drive innovation and business growth.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-8 px-6 pb-20 max-w-6xl mx-auto">
        {articles.map((post, index) => (
          <Motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link
              to={`/article/${post.id}`}
              className="transform transition duration-300 hover:scale-105 cursor-pointer block"
            >
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-md mb-4 transition duration-300 transform hover:scale-105"
                />
                <span className="text-sm text-gray-400 uppercase">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mt-1 text-black">
                  {post.title}
                </h3>
              </div>
            </Link>
          </Motion.div>
        ))}
      </section>

      <Footer />
    </Motion.div>
  );
};

export default BlogsPage;
