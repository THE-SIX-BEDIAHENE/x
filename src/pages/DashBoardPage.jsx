// src/pages/DashboardPage.jsx
import React from "react";
import { CiFilter } from "react-icons/ci";
import { Link } from "react-router";

const DashboardPage = () => {
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Navbar */}
      <div className="flex flex-wrap items-center bg-red-600 w-full fixed p-3 justify-between z-50">
        <div className="flex items-center">
          <img src="/logo.png" width={100} alt="Logo" className="mr-2" />
          <h1 className="font-[MuseoModerno] font-semibold text-xl text-white">
            SteadyX Dashboard
          </h1>
        </div>
        <div>
          <button className="bg-white text-red-600 font-[MuseoModerno] py-2 px-4 rounded-full">
            Menu
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex flex-col gap-5 p-5 sm:p-10 pt-36 bg-gray-100"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        {/* <BackButton /> */}

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full pt-30">
          <MetricCard label="Total News Articles" value="12" />
          <MetricCard label="Total Projects" value="8" />
          <MetricCard label="Combined Items" value="20" />
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-5">
          <div className="flex items-center gap-5 w-full sm:w-2/3">
            <select className="border border-gray-300 p-2 rounded-md bg-white">
              <option value="news">News</option>
              <option value="project">Projects</option>
            </select>
            <input
              placeholder="Search"
              className="bg-white rounded-md border border-gray-300 p-2 w-full"
            />
          </div>
          <button className="p-2 px-6 bg-red-600 rounded-md text-white font-[MuseoModerno]">
            Add Item
          </button>
        </div>

        {/* Placeholder Table */}
        <div className="mt-10 bg-white rounded-md shadow p-6 text-center font-[MuseoModerno] text-gray-500">
          Table will be displayed here.
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ label, value }) => (
  <div className="flex flex-col w-full rounded-2xl border gap-3 p-5 border-gray-300 bg-white">
    <div className="w-10 h-10 rounded-xl bg-gray-100"></div>
    <p className="font-[MuseoModerno] text-sm">{label}</p>
    <h1 className="font-[MuseoModerno] font-bold text-2xl">{value}</h1>
  </div>
);

export default DashboardPage;
