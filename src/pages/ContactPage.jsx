import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Contactpage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start w-full pt-35 md:pt-25 px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl font-bold text-[#2E3E99] mb-10">
          {t("contact.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t("contact.form.name")}
                className="border border-gray-300 outline-none p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder={t("contact.form.email")}
                className="border border-gray-300 outline-none p-3 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder={t("contact.form.message")}
              className="border border-gray-300 outline-none p-3 rounded-md w-full h-50 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#2E3E99] w-full font-bold text-white px-6 py-5 rounded-md hover:bg-gray-800 transition duration-200 cursor-pointer"
            >
              {t("contact.form.sendButton")}
            </button>
          </form>

          {/* Video Section */}
          <div>
              <video autoPlay loop muted playsInline className="rounded-lg object-cover shadow overflow-hidden border border-gray-300 w-full h-full max-h-[400px]">
              <source src="/Open Splash.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactpage;
