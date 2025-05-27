import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Contactpage = () => {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col items-center justify-start w-full min-h-screen pt-[15vh] px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl font-bold text-[#2E3E99] mb-10 ">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-[#2E3E99] outline-none p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-[#2E3E99] outline-none p-3 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border border-[#2E3E99] outline-none p-3 rounded-md w-full h-40 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#2E3E99] font-bold text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-200 cursor-pointer" 
            >
              Send Message
            </button>
          </form>

          {/* Image Section */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1633643092045-a51c99cd491f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Telecom tower"
              className="rounded-lg object-cover w-full h-full max-h-[400px]"
            />
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default Contactpage;
