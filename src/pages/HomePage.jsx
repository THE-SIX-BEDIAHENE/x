import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NavBar from "../components/NavBar";
import Marquee from "../components/Marquee";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import CountUpOnView from "../components/CountUpOnView";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const visionRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true });

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true });

  const { t } = useTranslation();

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <header className="flex px-5 pt-35 md:pt-25">
        <motion.section
          className="relative w-full min-h-[80vh] flex justify-center items-center text-white rounded-2xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="relative z-10 text-center py-4 px-4">
            <motion.h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-6">
              {t("homepage.welcome")} <span>STEADY/X</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mb-6 md:mb-10 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {t("homepage.hero_description")}
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link to="/projects">
                <button className="bg-white text-black px-6 py-3 text-lg font-bold rounded-xl hover:bg-[#E81D25] hover:text-white transition cursor-pointer">
                  {t("homepage.explore_projects")}
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-white px-6 py-3 text-lg font-bold rounded-xl hover:bg-[#2E3E99] hover:text-white transition cursor-pointer">
                  {t("homepage.partner_with_us")}
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </header>

      {/* Vision Section */}
      <motion.section
        ref={visionRef}
        className="flex flex-col md:flex-row w-full px-6 md:px-20 py-10 gap-6 md:gap-16"
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-[20%] text-[#2E3E99] text-center text-3xl md:text-4xl font-bold">
          {t("homepage.vision_title")}
        </div>
        <div className="w-full md:w-[80%] text-center md:text-left text-xl md:text-4xl font-bold leading-snug">
          {t("homepage.vision_description")}
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        ref={missionRef}
        className="flex flex-col md:flex-row w-full px-6 md:px-20 py-10 gap-6 md:gap-16"
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full md:w-[20%] text-[#2E3E99] text-center text-3xl md:text-4xl font-bold">
          {t("homepage.mission_title")}
        </div>
        <div className="w-full md:w-[80%] text-center md:text-left text-xl md:text-4xl font-bold leading-snug">
          {t("homepage.mission_description")}
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section
        className="flex flex-col-reverse md:flex-row w-full items-center px-6 md:px-10 py-10 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-[50%]  flex justify-center items-center">
          <img
            className="rounded-lg w-full h-100 object-cover"
            src="https://res.cloudinary.com/dvxyrvgbc/image/upload/f_auto,q_auto/IMG_0023_xucz1r.jpg"
            alt="Impact Metrics Visual"
          />
        </div>
        <div className="w-full gap-5  md:w-[50%] grid grid-cols-1 md:grid-cols-2 text-center">
          <div className="text-3xl md:text-4xl text-[#2E3E99] font-bold col-span-2">
            {t("homepage.impact_metrics")}
          </div>
          <div className="text-center ">
            <h1 className="text-6xl md:text-8xl font-bold flex justify-center">
              <CountUpOnView target={1970} duration={1000} />
              <span className="text-red-600 text-4xl md:text-6xl align-super">
                +
              </span>
            </h1>
            <p className="font-medium text-lg md:text-2xl">
              {t("homepage.students_reached")}
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold flex justify-center">
              <CountUpOnView target={15} duration={9000} />
              <span className="text-red-600 text-4xl md:text-6xl align-super">
                +
              </span>
            </h1>
            <p className="font-medium text-lg md:text-2xl">
              {t("homepage.years_experience")}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className="w-full px-6 md:px-10 py-10 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-[90%] rounded-4xl bg-white flex flex-col items-center pt-10">
          <p className="text-[#2E3E99] font-bold text-3xl md:text-4xl mb-6">
            {t("homepage.our_partners")}
          </p>
          <Marquee />
        </div>
      </motion.section>

      <section className="flex">
        <TestimonialSection />
      </section>

      <footer className="flex justify-center items-center">
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
