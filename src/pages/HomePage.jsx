import React from "react";
import NavBar from "../components/NavBar";
import Marquee from "../components/Marquee";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import CountUpOnView from "../components/CountUpOnView";
import img from "/metric.jpg";
import img2 from "/teacher.JPG";
import img3 from "/training.JPG";

const HomePage = () => {
  return (
    <>
      <NavBar />

      <header className="flex px-5 pt-30 md:pt-25">
        <div className="flex bg-cover bg-center w-full min-h-[80vh] rounded-2xl bg-[url(https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
          <section className="w-full min-h-[80vh] px-4 md:px-10 flex flex-col bg-[#0000004d] justify-center items-center text-center text-white rounded-2xl">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
              Welcome to <span className="">STEADY/X</span>
            </h1>
            <p className="text-base md:text-xl max-w-3xl mb-6 md:mb-10">
              Bridging technology and tradition to reshape African education. At Steady/X, we empower learners and educators with tools, training, and knowledge for a confident, future-ready generation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <button className="bg-white text-black px-6 py-3 text-lg font-bold rounded-xl hover:bg-[#E81D25] hover:text-white transition cursor-pointer">
                Explore Programs
              </button>
              <button className="border border-white px-6 py-3 text-lg font-bold rounded-xl hover:bg-[#2E3E99] hover:text-white transition cursor-pointer">
                Partner With Us
              </button>
            </div>
          </section>
        </div>
      </header>

      <section className="flex flex-col md:flex-row w-full px-6 md:px-20 py-10 gap-6 md:gap-16">
        <div className="w-full md:w-[20%] text-[#2E3E99] text-center text-3xl md:text-4xl font-bold">
          Vision
        </div>
        <div className="w-full md:w-[80%] text-left text-xl md:text-4xl font-bold leading-snug">
          At Steady/X, we envision a well-grounded educational process that fosters a centered mindset—empowering individuals to achieve their life objectives with clarity and excellence.
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full px-6 md:px-20 py-10 gap-6 md:gap-16">
        <div className="w-full md:w-[20%] text-[#2E3E99] text-center text-3xl md:text-4xl font-bold">
          Mission
        </div>
        <div className="w-full md:w-[80%] text-left text-xl md:text-4xl font-bold leading-snug">
          Our mission is to holistically educate individuals across Africa, combining traditional and technological tools to build confidence, critical thinking, and real-world readiness in every learner.
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row w-full items-center px-6 md:px-10 py-10 gap-10">
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <img className="rounded-lg w-full h-auto object-cover" src={img} alt="" />
        </div>
        <div className="w-full md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div className="text-3xl md:text-4xl text-[#2E3E99] font-medium col-span-2">Impact Metrics</div>
          <div>
            <h1 className="text-6xl md:text-8xl font-bold flex justify-center">
              <CountUpOnView target={1970} duration={1000} />
              <span className="text-red-600 text-4xl md:text-6xl align-super">+</span>
            </h1>
            <p className="font-medium text-lg md:text-2xl">Students Reached</p>
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-bold flex justify-center">
              <CountUpOnView target={15} duration={1000} />
              <span className="text-red-600 text-4xl md:text-6xl align-super">+</span>
            </h1>
            <p className="font-medium text-lg md:text-2xl">Years of Collective Experience</p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-10 py-10 flex justify-center">
        <div className="w-full md:w-[90%] rounded-4xl bg-white flex flex-col items-center py-10">
          <p className="text-[#2E3E99] font-bold text-3xl md:text-4xl mb-6">Our Partners</p>
          <div className="w-full">
            <Marquee />
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[20%] text-3xl md:text-4xl font-bold text-[#2E3E99]">Our Services</div>
          <div className="w-full md:w-[80%] text-xl md:text-4xl font-bold leading-tight">
            Bridging technology and education through devices, curriculum, teacher training, and educational networks across Africa.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          <div className="rounded-lg text-white text-2xl md:text-3xl font-bold bg-cover bg-center flex items-center justify-center aspect-[4/3]" style={{ backgroundImage: `url(https://ghanafact.com/storage/2024/04/Screenshot-2024-04-23-at-11.01.09%E2%80%AFAM.png)` }}>
            <div className="bg-black/50 w-full h-full rounded-lg flex items-center justify-center text-center p-4">
              Device Distribution & LMS Access
            </div>
          </div>
          <div className="rounded-lg text-white text-2xl md:text-3xl font-bold bg-cover bg-center flex items-center justify-center aspect-[4/3]" style={{ backgroundImage: `url(${img2})` }}>
            <div className="bg-black/50 w-full h-full rounded-lg flex items-center justify-center text-center p-4">
              TCM-aligned Curriculum Development
            </div>
          </div>
          <div className="rounded-lg text-white text-2xl md:text-3xl font-bold bg-cover bg-center flex items-center justify-center aspect-[4/3]" style={{ backgroundImage: `url(${img3})` }}>
            <div className="bg-black/50 w-full h-full rounded-lg flex items-center justify-center text-center p-4">
              Teacher Training Programs
            </div>
          </div>
          <div className="rounded-lg text-white text-2xl md:text-3xl font-bold bg-cover bg-center flex items-center justify-center aspect-[4/3]" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
            <div className="bg-black/50 w-full h-full rounded-lg flex items-center justify-center text-center p-4">
              Virtual Learning Networks <br /> (AIS, JSMQ, NDLP)
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-10 py-20 bg-black text-white text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-6">Why Steady/X?</h2>
        <p className="text-base md:text-xl leading-loose max-w-4xl mx-auto">
          STEADY/X is founded on the principle of differentiation—DY/DX. Everyone is unique, and our systems reflect that. Rooted in science, technology, engineering, arts, and a strong moral compass, we provide the right educational foundations for Africa's future innovators.
        </p>
      </section>

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
