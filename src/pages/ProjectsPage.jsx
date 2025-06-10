import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { FaEye, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    current: 0,
    title: "",
  });

  const projects = [
    {
      title: t("projects.capeCoast.title"),
      description: t("projects.capeCoast.description"),
      link: "https://www.graphic.com.gh/news/general-news/10bn-cape-coast-green-city-project-education-module-takes-off.html",
      images: [
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749522968/IMG_0890_wdye9y.jpg",
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749522904/IMG_0850_dzz3gv.jpg",
      ],
    },
    {
      title: t("projects.kingsVillage.title"),
      description: t("projects.kingsVillage.description"),
      images: [
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/f_auto,q_auto/IMG_0018_1_hexjxk_y08r2d.jpg",
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749523491/IMG_0128_b9ctwo.jpg",
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/f_auto,q_auto/IMG_0115_qdn2mb.jpg",
      ],
    },
    {
      title: t("projects.ais.title"),
      description: t("projects.ais.description"),
      images: [
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/f_auto,q_auto/IMG_20200813_135201_s8inuj.jpg",
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749526440/IMG_20200813_142408_r6opd4.jpg",
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749526440/IMG_20200813_135127_vednmj.jpg",
      ],
    },
    {
      title: t("projects.jsmq.title"),
      description: t("projects.jsmq.description"),
      images: [
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749523513/IMG_0259_jnuuuk.jpg",
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749523525/IMG_0308_cysnmt.jpg",
        "https://res.cloudinary.com/dvxyrvgbc/image/upload/v1749523521/IMG_0312_dup9vh.jpg",
      ],
    },
  ];

  const openLightbox = (images, index, title) => {
    setLightbox({ isOpen: true, images, current: index, title });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, images: [], current: 0, title: "" });
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      current: (prev.current + 1) % prev.images.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      current: (prev.current - 1 + prev.images.length) % prev.images.length,
    }));
  };

  useEffect(() => {
    document.body.style.overflow = lightbox.isOpen ? "hidden" : "auto";
  }, [lightbox.isOpen]);

  return (
    <>
      <Navbar />
      <motion.div
        className="px-4 pt-35 md:py-25 md:px-16 bg-white text-gray-800"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1 className="text-4xl font-bold text-center mb-12">
          {t("projects.pageTitle")}
        </h1>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex flex-col border border-gray-200 md:flex-row items-center gap-6 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="md:w-1/2 relative group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(project.images, 0, project.title)}
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} cover`}
                  className={`w-full h-64 md:h-80 object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-75 ${
                    index % 2 === 0 ? "rounded-l-xl" : "rounded-r-xl"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
                  <FaEye className="text-white text-3xl" />
                </div>
              </div>

              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {t("projects.learnMore")}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox.isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 transition-opacity duration-300">
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={closeLightbox}
            >
              <FaTimes />
            </button>

            {lightbox.images.length > 1 && (
              <>
                <button
                  className="absolute left-5 text-white text-3xl"
                  onClick={prevImage}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="absolute right-5 text-white text-3xl"
                  onClick={nextImage}
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <div className="text-white mb-4 text-center px-4">
              <h2 className="text-xl font-semibold">{lightbox.title}</h2>
              <p className="text-sm opacity-75">
                {lightbox.current + 1} / {lightbox.images.length}
              </p>
            </div>

            <img
              src={lightbox.images[lightbox.current]}
              alt={`Project image ${lightbox.current + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        )}
      </motion.div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
