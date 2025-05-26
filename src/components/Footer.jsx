import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[95%] max-w-7xl mx-auto bg-gray-100 space-x-8 rounded-2xl text-gray-800 pr-8 py-8 font-[Urbanist] my-10 border border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-10 md:gap-0">
        {/* Left Section: Logo + Info */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-10 md:w-2/4">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-42 sm:w-40 md:w-44 object-contain"
          />
          <div className="flex flex-col  text-center md:text-left space-y-1 sm:space-y-2">
            <p className="font-extrabold text-lg sm:text-xl text-[#672D90]">STEADY/X</p>
            <p className="text-sm sm:text-base text-gray-700">10 Jungle Road, East Legon, Accra, Ghana</p>
            <p className="text-sm sm:text-base text-gray-700">inf.com</p>
          </div>
        </div>

        {/* Middle Section: Nav Links */}
        <nav className=" flex flex-wrap  items-center md: gap-x-10 gap-y-3 md:w-1/5 ml-5 lg:w-2/4 font-semibold text-gray-700 text-base sm:text-lg">
          {["Home", "About", "Projects", "Contact", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#672D90] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section: Social Icons */}
        <div className="  flex justify-center items-center md:justify-end  space-x-8 text-[#672D90] text-3xl">
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-[#1DA1F2] transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-[#E1306C] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            className="hover:text-[#FF0000] transition-colors duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
