import React from "react";
import { motion as Motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  const [faqOpen, setFaqOpen] = React.useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const faqs = [
    {
      question: "What does Steady/X stand for?",
      answer:
        "Steady/X stands for a foundation in Science, Technology, Engineering, Arts, and a unique differentiating factor (DY/DX) that emphasizes individuality.",
    },
    {
      question: "How does Steady/X support education?",
      answer:
        "We provide devices, curated content, teacher training, and education-focused networks to support holistic learning across Africa.",
    },
    {
      question: "What age groups do you serve?",
      answer:
        "Our services are tailored for a wide range—from primary students to tertiary learners, as well as teacher development programs.",
    },
  ];

  const team = [
    {
      name: "Kwame Mensah",
      role: "Founder & CEO",
      bio: "Kwame is a visionary leader in education reform and digital learning access across Africa.",
      image: "/metric.jpg", // Make sure this path is correct
    },
    {
      name: "Akosua Boateng",
      role: "Director of Curriculum",
      bio: "Akosua ensures content is locally relevant and globally competitive.",
      image: "/metric.jpg", // Make sure this path is correct
    },
    {
      name: "Michael Asare",
      role: "Tech Lead",
      bio: "Michael bridges modern technology and education, leading innovations in our LMS and digital platforms.",
      image: "/metric.jpg", // Make sure this path is correct
    },
  ];

  const MotionSection = Motion.section;
  const MotionDiv = Motion.div;

  return (
    <>
      {" "}
      <Navbar />
      <div className="px-10 py-25 space-y-20">
        {/* Mission and Vision */}
        <MotionSection
          className="text-center space-y-6 flex flex-col items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <div className="relative flex flex-col gap-5 justify-center items-center w-full min-h-[80vh] text-white px-6 text-center overflow-hidden rounded-2xl">
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src="/Open Splash.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay (optional) */}
            <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

            {/* Content */}
            <h1 className="text-5xl md:text-6xl font-bold z-20">
              About Steady/X
            </h1>
            <p className="text-xl max-w-3xl z-20">
              At Steady/X, we envision a centered educational process that
              empowers individuals to achieve their goals with excellence.{" "}
              <br />
              Our mission is to holistically educate minds across Africa, using
              technology to provide access, confidence, and real-world
              readiness.
            </p>
          </div>
        </MotionSection>

        {/* Core Values */}
        <MotionSection
          className="text-center space-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl font-semibold">Core Values</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Rooted in African heritage, our core values are embodied by
            traditional Adinkra symbols — timeless icons of wisdom, purpose, and
            cultural strength.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
            {/* Dedication */}
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4"
            >
              <img
                src="https://www.adinkrasymbols.org/adinkra/eban-medium.png"
                alt="Eban Symbol - Dedication"
                className="w-24 h-24 object-contain"
              />
              <h3 className="text-2xl font-bold">Dedication</h3>
              <p className="text-gray-600 text-sm">
                Represented by <strong>Eban</strong>, symbolizing protection,
                security, and unwavering commitment to community and mission.
              </p>
            </MotionDiv>

            {/* Dynamism */}
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4"
            >
              <img
                src="https://www.adinkrasymbols.org/adinkra/nkyemu-medium.png"
                alt="Nkyinkyim Symbol - Dynamism"
                className="w-24 h-24 object-contain"
              />
              <h3 className="text-2xl font-bold">Dynamism</h3>
              <p className="text-gray-600 text-sm">
                Illustrated by <strong>Nkyinkyim</strong>, this symbol
                celebrates movement, initiative, and the ability to adapt and
                evolve.
              </p>
            </MotionDiv>

            {/* Integrity */}
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4"
            >
              <img
                src="https://www.adinkrasymbols.org/adinkra/fawohodie-medium.png"
                alt="Fawohodie Symbol - Integrity"
                className="w-24 h-24 object-contain"
              />
              <h3 className="text-2xl font-bold">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Embodied by <strong>Fawohodie</strong>, standing for freedom and
                moral uprightness — a commitment to truth and responsibility.
              </p>
            </MotionDiv>
          </div>
        </MotionSection>

        {/* Logo and Colors Meaning */}
        <MotionSection
          className="text-left max-w-4xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl font-semibold mb-4">Our Identity</h2>

          {/* Color Representation Row with centered text inside each colored box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 text-sm text-white">
            <div className="p-3 bg-red-600 rounded-md flex items-center justify-center text-center min-h-[80px]">
              <span>
                <strong className="text-white">Red</strong>: Blood of the Lamb
                (Jesus)
              </span>
            </div>
            <div className="p-3 bg-blue-500 rounded-md flex items-center justify-center text-center min-h-[80px]">
              <span>
                <strong className="text-white">Blue</strong>: Sanity and flow
                (ocean of knowledge)
              </span>
            </div>
            <div className="p-3 bg-purple-600 rounded-md flex items-center justify-center text-center min-h-[80px]">
              <span>
                <strong className="text-white">Purple</strong>: Royalty
              </span>
            </div>
            <div className="p-3 bg-white text-gray-700 border border-gray-300 rounded-md flex items-center justify-center text-center min-h-[80px]">
              <span>
                <strong className="text-gray-700">White</strong>: Vibrant
                excellence and clarity
              </span>
            </div>
            <div className="p-3 bg-black text-white rounded-md flex items-center justify-center text-center min-h-[80px]">
              <span>
                <strong className="text-white">Blocks</strong>: Foundational
                building blocks for the future
              </span>
            </div>
          </div>
        </MotionSection>

        {/* Partners
        <MotionSection
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl font-semibold mb-4">Our Partners</h2>
          <p className="text-lg">
            Samsung Ghana, KNUST, Junior Science and Maths Quiz (JSMQ)
          </p>
        </MotionSection> */}

        {/* Projects */}
        <MotionSection
          className="max-w-5xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Cape Coast Green City */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/metric.jpg" // Replace with actual image path
                alt="Cape Coast Green City"
                className="w-full h-70 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Cape Coast Green City</h3>
                <p className="mt-2">
                  Education module launched under Ghana’s Green City initiative.{" "}
                  <a
                    href="https://www.graphic.com.gh/news/general-news/10bn-cape-coast-green-city-project-education-module-takes-off.html "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            {/* Tamale King's Village */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/metric.jpg" // Replace with actual image path
                alt="Tamale King's Village"
                className="w-full h-70 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Tamale King's Village</h3>
                <p className="mt-2">
                  After-school intervention program featuring Math, Science,
                  Geography, English, Coding & Robotics. Delivered both
                  in-person and via our LMS.
                </p>
              </div>
            </div>

            {/* Teacher Training */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/metric.jpg" // Replace with actual image path
                alt="Teacher Training"
                className="w-full h-70 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Teacher Training</h3>
                <p className="mt-2">
                  Empowering educators with technology tools through our
                  comprehensive train-the-trainer model.
                </p>
              </div>
            </div>

            {/* Junior Science and Maths Quiz */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/metric.jpg" // Replace with actual image path
                alt="Junior Science and Maths Quiz"
                className="w-full h-70 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">
                  Junior Science and Maths Quiz
                </h3>
                <p className="mt-2">
                  Sponsoring science-focused education by donating tablets and
                  supporting student development.
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Team */}
        <MotionSection
          className="text-center space-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl font-semibold">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center"
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-50 h-50 rounded-full object-cover mb-4"
                />
                {/* Name */}
                <h3 className="text-2xl font-bold">{member.name}</h3>
                {/* Role */}
                <p className="text-gray-600 italic">{member.role}</p>
                {/* Bio */}
                <p className="text-sm mt-2">{member.bio}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionSection>

        {/* FAQ */}
        <MotionSection
          className="space-y-6 max-w-4xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl font-semibold text-center">FAQs</h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b py-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center text-xl font-medium">
                <span>{faq.question}</span>
                {faqOpen === index ? <FaMinus /> : <FaPlus />}
              </div>
              {faqOpen === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </MotionSection>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
