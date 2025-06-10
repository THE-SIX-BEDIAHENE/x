import React from "react";
import { motion as Motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { useTranslation } from "react-i18next";

const articles = [
  {
    id: 2,
    image: "https://newsghana.com.gh/wp-content/uploads/2021/06/Social-Tutors-Training-696x522.jpg",
    url: "https://newsghana.com.gh/tutors-of-ict-training-laud-mamdev-ltd-steady-x/"
  },
  {
    id: 3,
    image: "https://www.graphic.com.gh/images/2021/jun/23/education.png",
    url: "https://www.graphic.com.gh/news/general-news/10bn-cape-coast-green-city-project-education-module-takes-off.html?template=ghananewsp&is_preview=on"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749523038/IMG_0865_aktgvk.jpg",
    url: "https://gna.org.gh/2021/06/tutors-of-ict-training-laud-mamdev-ltd-steadyx/"
  },
  {
    id: 5,
    image: "https://link-il.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-28-at-17.45.07-1024x538.jpeg",
    url: "https://link-il.com/blog/online-training-topedu-steadyx/"
  },
  {
    id: 1,
    image: "https://citinewsroom.com/wp-content/uploads/2021/05/Cape-Coast-Green-City-project--706x375.jpg",
    url: "https://citinewsroom.com/2021/05/cape-coast-green-city-project-launched/"
  }
];

const NewsPage = () => {
  const { t } = useTranslation();

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

      {/* Blog Cards */}
      <section className="grid grid-cols-1 md:mt-10 md:grid-cols-2 gap-8 px-6 pb-20 max-w-6xl mx-auto">
        {articles.map((post, index) => (
          <Motion.div
            key={post.id}
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
                  src={post.image}
                  alt={t(`news.articles.${index}.title`)}
                  className="rounded-md mb-4 transition duration-300 transform hover:scale-105"
                />
                <span className="text-sm text-gray-400 uppercase">
                  {t(`news.articles.${index}.category`)}
                </span>
                <h3 className="text-xl font-semibold mt-1 text-black">
                  {t(`news.articles.${index}.title`)}
                </h3>
              </div>
            </a>
          </Motion.div>
        ))}
      </section>

      <Footer />
    </Motion.div>
  );
};

export default NewsPage;
