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
      <header className="flex px-5 pt-15">
        <div className="flex bg-cover bg-center w-full h-[90vh] rounded-2xl bg-[url(https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
          <section className="w-full h-[90vh] px-10 flex flex-col bg-[#0000004d] justify-center items-center text-center  text-white rounded-2xl">
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Welcome to <span className="">STEADY/X</span>
            </h1>
            <p className="text-xl max-w-3xl mb-10">
              Bridging technology and tradition to reshape African education. At
              Steady/X, we empower learners and educators with tools, training,
              and knowledge for a confident, future-ready generation.
            </p>
            <div className="flex gap-6">
              <button className="bg-white text-black px-6 py-3 text-lg font-bold rounded-xl hover:bg-[#E81D25] hover:text-white transition  cursor-pointer">
                Explore Programs
              </button>
              <button className="border border-white px-6 py-3 text-lg font-bold rounded-xl hover:bg-[#2E3E99] hover:text-white transition cursor-pointer">
                Partner With Us
              </button>
            </div>
          </section>
        </div>
      </header>

      <section className="flex w-full h-[50vh] px-20 gap-16">
        <div className="flex w-[20%] justify-center items-center text-[#2E3E99] text-center text-4xl font-bold">
          Vision
        </div>
        <div className="flex w-[80%] justify-center items-center text-left text-4xl font-bold leading-snug">
          At Steady/X, we envision a well-grounded educational process that
          fosters a centered mindset—empowering individuals to achieve their
          life objectives with clarity and excellence.
        </div>
      </section>

      <section className="flex w-full h-[50vh] px-20 gap-16">
        <div className="flex w-[20%] justify-center items-center text-[#2E3E99] text-center text-4xl font-bold">
          Mission
        </div>
        <div className="flex w-[80%] justify-center items-center text-left text-4xl font-bold leading-snug">
          Our mission is to holistically educate individuals across Africa,
          combining traditional and technological tools to build confidence,
          critical thinking, and real-world readiness in every learner.
        </div>
      </section>

      <section className="flex w-full h-[100vh] items-center px-10">
        <div className="flex w-[40%] justify-center items-center">
          <div className="w-[80%] h-[70%]  rounded-lg object-fill">
            {/* Could include a graph or an illustration representing education access, devices, content, training */}
            <img className="rounded-lg object-fill" src={img} alt="" />
          </div>
        </div>
        <div className="flex w-[50%] items-center text-center ">
          <div className="grid grid-cols-2 gap-10">
            <div className="text-4xl text-[#2E3E99]  font-medium">
              Impact Metrics
            </div>
            <div className="flex flex-col ">
              <h1 className="text-8xl font-bold flex">
                {" "}
                <CountUpOnView target={1970} duration={1000} />
                <span className="text-red-600 text-6xl align-super">+</span>
              </h1>
              <p className="font-medium text-2xl">Students Reached</p>
            </div>
            <div className="flex-col flex">
              <h1 className="text-8xl font-bold flex">
                <CountUpOnView target={15} duration={1000} />
                <span className="text-red-600 text-6xl align-super">+</span>
              </h1>
              <p className="font-medium text-2xl">
                Years of Collective Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full h-[90vh] px-10 justify-center items-center ">
        <div className="w-[90%] h-[65%] rounded-4xl bg-white flex flex-col justify-center items-center">
          <p className="text-[#2E3E99] font-bold text-4xl">Our Partners</p>
          <div className="w-full">
            <Marquee />
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full min-h-screen px-10">
        <div className="flex ">
          <div className="w-[20%] text-4xl font-bold text-[#2E3E99]">
            Our Services
          </div>
          <div className="w-[80%] text-4xl font-bold pl-26 leading-tight">
            Bridging technology and education through devices, curriculum,
            teacher training, and educational networks across Africa.
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-10 ">
          <div className="grid grid-cols-2 gap-5">
            <div
              className="w-[40vw] h-[30vw] rounded-lg flex items-center justify-center text-white text-4xl font-bold bg-[url(https://ghanafact.com/storage/2024/04/Screenshot-2024-04-23-at-11.01.09%E2%80%AFAM.png)] bg-cover"
              // style={{
              //   backgroundImage: `url(${img})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <div className="rounded-lg object-fill w-[40vw] h-[30vw] bg-[#0000007e] flex items-center justify-center">
                {" "}
                Device Distribution & LMS Access
              </div>
            </div>
      
        <div
              className="w-[40vw] h-[30vw] rounded-lg flex items-center justify-center text-white text-4xl font-bold "
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="rounded-lg object-fill w-[40vw] h-[30vw] bg-[#0000007e] flex items-center justify-center text-center">
              TCM-aligned Curriculum Development
              </div>
            </div>
            <div
              className="w-[40vw] h-[30vw] rounded-lg flex items-center justify-center text-white text-4xl font-bold "
              style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="rounded-lg object-fill w-[40vw] h-[30vw] bg-[#0000007e] flex items-center justify-center text-center">
                Teacher Training Programs
              </div>
            </div>
             <div
              className="w-[40vw] h-[30vw] rounded-lg flex items-center justify-center text-white text-4xl font-bold bg-[url(https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
            >
              <div className="rounded-lg object-fill w-[40vw] h-[30vw] bg-[#00000057] flex items-center justify-center text-center">
              Virtual Learning Networks<br /> (AIS, JSMQ, NDLP)
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="w-full h-screen px-10 flex justify-center items-center mt-20">
        <div className="w-full h-[90vh] rounded-2xl bg-black text-white flex flex-col justify-center items-center px-20 text-center">
          <h2 className="text-6xl font-bold mb-6">Why Steady/X?</h2>
          <p className="text-xl leading-loose max-w-4xl">
            STEADY/X is founded on the principle of differentiation—DY/DX.
            Everyone is unique, and our systems reflect that. Rooted in science,
            technology, engineering, arts, and a strong moral compass, we
            provide the right educational foundations for Africa's future
            innovators.
          </p>
        </div>
      </section>

      <section className="flex scrollbar-hidden">
        <TestimonialSection />
      </section>

      <footer className="flex justify-center items-center">
        {" "}
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
