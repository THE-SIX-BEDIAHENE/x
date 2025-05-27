/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const ArticlePage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-black font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-25">
        <div className="flex items-center space-x-4 mt-4">
          <span className="text-xs text-white bg-gray-800 px-2 py-1 rounded">Article</span>
          <span className="text-xs text-gray-500">Mar 11, 2025</span>
        </div>

        <h1 className="text-4xl font-bold mt-6 leading-snug">
          The Future of AI Automation: How It’s Changing Business Operations
        </h1>

        <p className="text-gray-600 text-xl mt-4">
          AI automation is transforming the way businesses operate, from
          streamlining workflows to enhancing decision-making. In this article,
          we explore the latest trends, innovations, and real-world applications
          that are reshaping industries worldwide.
        </p>

        <img
          src="/metric.jpg"
          alt="AI automation"
          className="rounded-lg my-10 w-full"
        />

        {/* Sections */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-600 text-xl">
              AI automation is no longer a futuristic concept—it’s already
              revolutionizing industries by optimizing workflows, reducing
              costs, and enhancing efficiency...
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              How AI Automation is Transforming Businesses
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 text-xl">
              <li><strong>Streamlining Workflows</strong>: Automating repetitive tasks.</li>
              <li><strong>Enhancing Decision-Making</strong>: Faster, smarter insights.</li>
              <li><strong>Improving Customer Experience</strong>: Personalized responses.</li>
              <li><strong>Cost Savings and Scalability</strong>: Reduce labor and scale fast.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Emerging Trends in AI Automation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-xl">
              <li><strong>Hyperautomation</strong>: Combining AI, ML, and RPA.</li>
              <li><strong>Predictive Analytics</strong>: Forecast behavior.</li>
              <li><strong>Autonomous Systems</strong>: Minimal human input needed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              The Future of AI in Business
            </h2>
            <p className="text-gray-600 text-xl">
              Early adopters gain a competitive edge. AI will keep driving change.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Final Thoughts</h2>
            <p className="text-gray-600 text-xl">
              AI automation is essential. Businesses should integrate it
              thoughtfully and evolve with new innovations.
            </p>
          </div>
        </section>

        {/* Back to Blogs Button (at the bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <button
            onClick={() => navigate("/blogs")}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            ← Back to Blogs
          </button>
        </motion.div>
      </article>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ArticlePage;
