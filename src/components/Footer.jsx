import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[90%] bg-gray-100 rounded-2xl text-gray-800 py-6 font-[Urbanist]  my-10 px-4 md:px-16 border border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        {/* Left Section */}
        <div>
          <div className="flex items-start ">
            <img src="/logo.png" alt="Logo" width={200} /> {/* Replace with actual logo path */}
            {/* <span className="text-lg font-medium">Silver Rock Technology</span> */}
          </div>
          <div className="text-sm my-2">
            <p>STEADY/X</p>
            <p>10 Jungle Road, East Legon, Accra, Ghana</p>
            <p>inf.com

</p>
          </div>
          <div className="flex space-x-4 text-xl mt-2">
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6 text-sm self-end md:self-auto">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
