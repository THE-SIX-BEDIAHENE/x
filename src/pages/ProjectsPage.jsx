import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { FaEye, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { apiService } from "../services/api";
import { toast } from 'react-toastify';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    current: 0,
    title: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const projectsData = await apiService.getProjects();
      setProjects(projectsData);
    } catch (error) {
      toast.error('Failed to load projects');
      console.error('Fetch projects error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
      <div className="px-4 pt-35 md:py-25 md:px-16 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-12">
          {t("projects.pageTitle")}
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className={`flex flex-col border border-gray-200 md:flex-row items-center gap-6 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className="md:w-1/2 relative group cursor-pointer overflow-hidden"
                  onClick={() => openLightbox([project.imageUrl], 0, project.title)}
                >
                  <img
                    src={project.imageUrl}
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
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
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
              </div>
            ))}
          </div>
        )}

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
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
