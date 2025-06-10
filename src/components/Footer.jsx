import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.Home"), path: "/" },
    { label: t("nav.About"), path: "/about" },
    { label: t("nav.Projects"), path: "/projects" },
    { label: t("nav.Contact"), path: "/contact" },
    { label: t("nav.News"), path: "/news" },
  ];

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
          <div className="flex flex-col text-center md:text-left space-y-1 sm:space-y-2">
            <p className="font-extrabold text-lg sm:text-xl text-[#672D90]">STEADY/X</p>
            <p className="text-sm sm:text-base text-gray-700">{t("footer.address")}</p>
            <p className="text-sm sm:text-base text-gray-700">{t("footer.email")}</p>
          </div>
        </div>

        {/* Middle Section: Nav Links */}
        <nav className="flex flex-wrap items-center gap-4 md:gap-x-10 gap-y-3 md:w-1/5 ml-5 lg:w-2/4 font-semibold text-gray-700 text-base sm:text-lg">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="hover:text-[#672D90] transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Social Icons */}
        <div className="flex justify-center items-center md:justify-end space-x-8 text-[#672D90] text-3xl">
          <a
            href="https://x.com/at_steadyx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#1DA1F2] transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/at_steadyx?igsh=Nzg1bGprYzI5MXU5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#E1306C] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="http://linkedin.com/company/steadyx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#5e89ff] transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
