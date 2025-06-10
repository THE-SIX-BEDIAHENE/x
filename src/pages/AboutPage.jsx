import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";

const AboutUsPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const { t } = useTranslation();

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const faqs = t("about.faqs.list", { returnObjects: true });

  const team = [
    {
      name: "Kwame",
      role: t("about.team.kwame.role"),
      bio: t("about.team.kwame.bio"),
      image: "/metric.jpg",
    },
    {
      name: "Akosua",
      role: t("about.team.akosua.role"),
      bio: t("about.team.akosua.bio"),
      image: "/metric.jpg",
    },
    {
      name: "Michael",
      role: t("about.team.michael.role"),
      bio: t("about.team.michael.bio"),
      image: "/metric.jpg",
    },
  ];

  const MotionSection = Motion.section;
  const MotionDiv = Motion.div;

  return (
    <>
      <Navbar />
      <div className="px-10 py-35 md:py-25 space-y-20">
        {/* Hero Section */}
        <MotionSection
          className="text-center space-y-6 flex flex-col items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <div className="relative flex flex-col gap-5 justify-center items-center w-full min-h-[80vh] text-white px-6 text-center overflow-hidden rounded-2xl">
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
              <source src="/Open Splash.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
            <h1 className="text-5xl md:text-8xl font-bold z-20">{t("about.title")}</h1>
            <p className="text-xl max-w-3xl z-20">{t("about.mission_vision.paragraph")}</p>
          </div>
        </MotionSection>

        {/* Core Values */}
        <MotionSection className="text-center space-y-8" variants={fadeIn} initial="hidden" whileInView="visible">
          <h2 className="text-4xl font-semibold text-[#2E3E99]">{t("about.core_values.heading")}</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">{t("about.core_values.description")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
            {["dedication", "dynamism", "integrity"].map((key) => (
              <MotionDiv
                key={key}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4"
              >
                <img
                  src={
                    key === "dedication"
                      ? "https://www.adinkrasymbols.org/adinkra/eban-medium.png"
                      : key === "dynamism"
                      ? "https://www.adinkrasymbols.org/adinkra/nkyemu-medium.png"
                      : "https://www.adinkrasymbols.org/adinkra/fawohodie-medium.png"
                  }
                  alt={key}
                  className="w-24 h-24 object-contain"
                />
                <h3 className="text-2xl font-bold">{t(`about.core_values.${key}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`about.core_values.${key}.description`)}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionSection>

        {/* Color Identity */}
        <MotionSection className="text-left max-w-4xl mx-auto" variants={fadeIn} initial="hidden" whileInView="visible">
          <h2 className="text-4xl font-semibold mb-4 text-[#2E3E99]">{t("about.identity.heading")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 text-sm text-white">
            {["red", "blue", "purple", "white", "black"].map((color) => (
              <div
                key={color}
                className={`p-3 rounded-md flex items-center justify-center text-center min-h-[80px] ${
                  color === "white"
                    ? "bg-white text-gray-700 border border-gray-300"
                    : `bg-${color}-600 text-white`
                }`}
              >
                <span>{t(`about.identity.colors.${color}`)}</span>
              </div>
            ))}
          </div>
        </MotionSection>

        {/* Featured Projects */}
        <MotionSection className="max-w-5xl mx-auto" variants={fadeIn} initial="hidden" whileInView="visible">
          <h2 className="text-4xl font-semibold mb-8 text-center text-[#2E3E99]">{t("about.projects.heading")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Cape Coast */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src="https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749523036/Mills_Library_liest2.jpg" alt="Cape Coast Green City" className="w-full h-70 object-cover object-top" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{t("about.projects.cape_coast.title")}</h3>
                <p className="mt-2">
                  {t("about.projects.cape_coast.description")}{" "}
                  <a
                    href="https://www.graphic.com.gh/news/general-news/10bn-cape-coast-green-city-project-education-module-takes-off.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {t("about.projects.cape_coast.learn_more")}
                  </a>
                </p>
                <Link to="/projects" className="inline-block mt-4 bg-[#2E3E99] text-white px-4 py-2 rounded-lg hover:bg-[#1e2b6b] transition duration-300">
                  {t("about.projects.cape_coast.more_details")}
                </Link>
              </div>
            </div>

            {/* Tamale Project */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src="https://res.cloudinary.com/dvxyrvgbc/image/upload/f_jpg/v1749523467/IMG_0079_nqvkh0.jpg
" alt="Tamale King's Village" className="w-full h-70 object-cover object-top" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{t("about.projects.tamale.title")}</h3>
                <p className="mt-2">{t("about.projects.tamale.description")}</p>
                <Link to="/projects" className="inline-block mt-4 bg-[#2E3E99] text-white px-4 py-2 rounded-lg hover:bg-[#1e2b6b] transition duration-300">
                  {t("about.projects.tamale.more_details")}
                </Link>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Team */}
        <MotionSection className="text-center space-y-8" variants={fadeIn} initial="hidden" whileInView="visible">
          <h2 className="text-4xl font-semibold text-[#2E3E99]">{t("about.team.heading")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <MotionDiv key={index} whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
                <img src={member.image} alt={member.name} className="w-50 h-50 rounded-full object-cover mb-4" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-gray-600 italic">{member.role}</p>
                <p className="text-sm mt-2">{member.bio}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionSection>

        {/* FAQs */}
        <MotionSection className="space-y-6 max-w-4xl mx-auto" variants={fadeIn} initial="hidden" whileInView="visible">
          <h2 className="text-4xl font-semibold text-center text-[#2E3E99]">{t("about.faqs.heading")}</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4 cursor-pointer" onClick={() => toggleFaq(index)}>
              <div className="flex justify-between items-center text-xl font-medium">
                <span>{faq.question}</span>
                {faqOpen === index ? <FaMinus /> : <FaPlus />}
              </div>
              {faqOpen === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </MotionSection>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
