// src/pages/DashboardPage.jsx
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { Link } from "react-router";
import AddItemModal from "../components/AddItemModal";
import BackButton from "../components/BackButton";

const DashboardPage = () => {
  const [projects, setProjects] = useState([]);
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects"); // 'projects' or 'news'

  const handleAddItem = (item) => {
    if (activeTab === "projects") {
      setProjects((prev) => [...prev, item]);
    } else {
      setNews((prev) => [...prev, item]);
    }
    setShowModal(false);
  };

  const filteredProjects = projects.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNews = news.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col w-full h-screen">
      {/* Navbar */}
      <div className="flex border border-gray-200 items-center shadow-2xl py-0 bg-white w-full fixed p-3 justify-between ">
        <div className="flex items-center  w-1/2 sm:w-1/3 md:w-1/4">
          <img src="/logo.png" width={140} alt="Logo" className="mr-2" />
          <h1 className="font-[MuseoModerno] font-semibold text-lg sm:text-xl md:text-2xl text-black">
            Dashboard
          </h1>
        </div>

        {/* Tabs */}
        <div className="w-96 flex gap-4 ">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded-full cursor-pointer hover:bg-red-600 hover:text-white  font-[MuseoModerno] ${
              activeTab === "projects"
                ? "bg-red-600 text-white"
                : "bg-white text-red-600 border border-red-600"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`px-4 py-2 rounded-full cursor-pointer hover:bg-red-600 hover:text-white font-[MuseoModerno] ${
              activeTab === "news"
                ? "bg-red-600 text-white"
                : "bg-white text-red-600 border border-red-600"
            }`}
          >
            News
          </button>
        </div>
        {/* Menu */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-white cursor-pointer border  border-red-600  text-red-600 hover:bg-red-600 hover:text-white  font-[MuseoModerno] font-medium py-2 px-4 rounded-full"
          >
            Menu
          </button>
          {menuOpen && (
            <div className="absolute top-12 right-0 w-40 bg-white rounded-md shadow-lg z-50">
              <div className="flex flex-col font-[MuseoModerno] text-black">
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
               
                <Link                   className="px-4 py-2 hover:bg-gray-100"
>Logout</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex flex-col pt-50 w-full min-h-full gap-5 p-5 sm:p-10 sm:pt-24 bg-gray-100"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        {/* Search + Add */}
        <div className="flex flex-col pt-15 sm:flex-row justify-between gap-5">
          <div className="flex items-center gap-5 w-full sm:w-2/3">
            <button className="rounded-md bg-white border border-gray-300 p-2 flex items-center justify-center">
              <CiFilter />
            </button>
            <input
              className="bg-white rounded-md border border-gray-300 p-2 w-full pl-4 font-medium"
              placeholder={`Search ${
                activeTab === "projects" ? "projects" : "news"
              }`}
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="p-2 px-6 bg-red-600 cursor-pointer rounded-md font-[MuseoModerno] text-white"
          >
            Add {activeTab === "projects" ? "Project" : "News"}
          </button>
        </div>

        {/* Display Items */}
        <div className="bg-white border border-gray-300 rounded-2xl p-5 mt-5">
          <h2 className="font-[MuseoModerno] text-xl font-semibold mb-4">
            {activeTab === "projects" ? "Projects" : "News"}
          </h2>
          {activeTab === "projects" && filteredProjects.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {filteredProjects.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item.name}
                </li>
              ))}
            </ul>
          ) : activeTab === "news" && filteredNews.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {filteredNews.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No {activeTab} items found.</p>
          )}
        </div>

        {/* Add Modal */}
        {showModal && (
          <AddItemModal
            onClose={() => setShowModal(false)}
            onAdd={handleAddItem}
            type={activeTab}
          />
        )}
      </div>
    </section>
  );
};

export default DashboardPage;
