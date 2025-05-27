import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NavBar from "../components/NavBar";
import Marquee from "../components/Marquee";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import CountUpOnView from "../components/CountUpOnView";
import img from "/metric.jpg";
import img2 from "/teacher.JPG";
import img3 from "/training.JPG";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const visionRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true });

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true });

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <header className="flex px-5 pt-35 md:pt-25 ">
        <motion.section
          className="w-full min-h-[80vh] bg-[#0000004d] md: flex flex-col  justify-center items-center text-center text-white rounded-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-center items-center text-center bg-cover bg-center w-full min-h-[80vh] rounded-2xl bg-[#0000004d] bg-[url(https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
            <motion.h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
              Welcome to <span>STEADY/X</span>
            </motion.h1>
            <motion.p
              className="text-base md:text-xl max-w-3xl mb-6 md:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Bridging technology and tradition to reshape African education. At
              Steady/X, we empower learners and educators with tools, training,
              and knowledge for a confident, future-ready generation.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <button className="bg-white text-black px-6 py-3 text-lg font-bold rounded-xl hover:bg-[#E81D25] hover:text-white transition cursor-pointer">
                Explore Programs
              </button>
              <button className="border border-white px-6 py-3 text-lg font-bold rounded-xl hover:bg-[#2E3E99] hover:text-white transition cursor-pointer">
                Partner With Us
              </button>
            </motion.div>
          </div>{" "}
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
          Vision
        </div>
        <div className="w-full md:w-[80%] text-left text-xl md:text-4xl font-bold leading-snug">
          At Steady/X, we envision a well-grounded educational process that
          fosters a centered mindset—empowering individuals to achieve their
          life objectives with clarity and excellence.
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
          Mission
        </div>
        <div className="w-full md:w-[80%] text-left text-xl md:text-4xl font-bold leading-snug">
          Our mission is to holistically educate individuals across Africa,
          combining traditional and technological tools to build confidence,
          critical thinking, and real-world readiness in every learner.
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section
        className="flex flex-col-reverse md:flex-row w-full items-center px-6 md:px-10 py-10 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <img
            className="rounded-lg w-full h-auto object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="w-full md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div className="text-3xl md:text-4xl text-[#2E3E99] font-medium col-span-2">
            Impact Metrics
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-bold flex justify-center">
              <CountUpOnView target={1970} duration={1000} />
              <span className="text-red-600 text-4xl md:text-6xl align-super">
                +
              </span>
            </h1>
            <p className="font-medium text-lg md:text-2xl">Students Reached</p>
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-bold flex justify-center">
              <CountUpOnView target={15} duration={1000} />
              <span className="text-red-600 text-4xl md:text-6xl align-super">
                +
              </span>
            </h1>
            <p className="font-medium text-lg md:text-2xl">
              Years of Collective Experience
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
        <div className="w-full md:w-[90%] rounded-4xl bg-white flex flex-col items-center py-10">
          <p className="text-[#2E3E99] font-bold text-3xl md:text-4xl mb-6">
            Our Partners
          </p>
          <div className="w-full">
            <Marquee />
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="flex flex-col w-full px-6 md:px-10 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[20%] text-3xl md:text-4xl font-bold text-[#2E3E99]">
            Our Services
          </div>
          <div className="w-full md:w-[80%] text-xl md:text-4xl font-bold leading-tight">
            Bridging technology and education through devices, curriculum,
            teacher training, and educational networks across Africa.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {[
            {
              title: "Device Distribution & LMS Access",
              image:
                "https://ghanafact.com/storage/2024/04/Screenshot-2024-04-23-at-11.01.09%E2%80%AFAM.png",
            },
            {
              title: "TCM-aligned Curriculum Development",
              image: img2,
            },
            {
              title: "Teacher Training Programs",
              image: img3,
            },
            {
              title: "Virtual Learning Networks (AIS, JSMQ, NDLP)",
              image:
                "https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="rounded-lg text-white text-2xl md:text-3xl font-bold bg-cover bg-center flex items-center justify-center aspect-[4/3]"
              style={{ backgroundImage: `url(${service.image})` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-black/50 w-full h-full rounded-lg flex items-center justify-center text-center p-4">
                {service.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Steady/X */}
      <motion.section
        className="w-full px-6 md:px-10 py-20 bg-black text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-6xl font-bold mb-6">Why Steady/X?</h2>
        <p className="text-base md:text-xl leading-loose max-w-4xl mx-auto">
          STEADY/X is founded on the principle of differentiation—DY/DX.
          Everyone is unique, and our systems reflect that. Rooted in science,
          technology, engineering, arts, and a strong moral compass, we provide
          the right educational foundations for Africa's future innovators.
        </p>
      </motion.section>

      {/* Testimonials and Footer */}
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
