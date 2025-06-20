import React, { useState, useEffect } from "react";
import {
  FaSignOutAlt,
  FaNewspaper,
  FaProjectDiagram,
  FaBars,
  FaTimes,
  FaHome,
  FaChartBar,
  FaCalendarAlt,
  FaClock,
  FaUserCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import ProjectsManager from "../components/admin/ProjectsManager";
import NewsManager from "../components/admin/NewsManager";
import { dataService } from "../services/dataService";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalNews: 0,
    recentProjects: 0,
    recentNews: 0,
  });
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const projects = dataService.getProjects();
    const news = dataService.getNews();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    setStats({
      totalProjects: projects.length,
      totalNews: news.length,
      recentProjects: projects.filter(
        (p) => new Date(p.createdAt) > thirtyDaysAgo
      ).length,
      recentNews: news.filter((n) => new Date(n.createdAt) > thirtyDaysAgo)
        .length,
    });
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FaChartBar },
    { id: "projects", label: "Projects", icon: FaProjectDiagram },
    { id: "news", label: "News", icon: FaNewspaper },
  ];

  const StatCard = ({ icon: Icon, label, value, subtext, color }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
          {subtext && <p className="mt-1 text-sm text-gray-500">{subtext}</p>}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={FaProjectDiagram}
                label="Total Projects"
                value={stats.totalProjects}
                color="bg-blue-500"
              />
              <StatCard
                icon={FaNewspaper}
                label="Total News Articles"
                value={stats.totalNews}
                color="bg-green-500"
              />
              <StatCard
                icon={FaCalendarAlt}
                label="Recent Projects"
                value={stats.recentProjects}
                subtext="Last 30 days"
                color="bg-purple-500"
              />
              <StatCard
                icon={FaClock}
                label="Recent Articles"
                value={stats.recentNews}
                subtext="Last 30 days"
                color="bg-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setActiveTab("projects")}
                    className="flex items-center justify-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="text-center">
                      <FaProjectDiagram className="w-8 h-8 mx-auto text-gray-400 group-hover:text-blue-500" />
                      <p className="mt-2 text-sm font-medium text-gray-600 group-hover:text-blue-700">
                        Add Project
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("news")}
                    className="flex items-center justify-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
                  >
                    <div className="text-center">
                      <FaNewspaper className="w-8 h-8 mx-auto text-gray-400 group-hover:text-green-500" />
                      <p className="mt-2 text-sm font-medium text-gray-600 group-hover:text-green-700">
                        Add Article
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  System Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Environment</span>
                    <span className="text-sm font-medium text-gray-900">
                      Production
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Last Login</span>
                    <span className="text-sm font-medium text-gray-900">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-500">Storage</span>
                    <span className="text-sm font-medium text-gray-900">
                      Local Storage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "projects":
        return <ProjectsManager />;
      case "news":
        return <NewsManager />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-row">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="flex items-center justify-between h-16 px-6 bg-indigo-600 text-white">
            <div className="flex items-center space-x-2">
              <FaChartBar className="w-6 h-6" />
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md hover:bg-indigo-500 focus:outline-none"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mr-3 ${
                      activeTab === tab.id ? "text-indigo-600" : "text-gray-400"
                    }`}
                  />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors mb-2"
            >
              <FaHome className="w-5 h-5 mr-3 text-gray-400" />
              View Site
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <FaSignOutAlt className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
              >
                <FaBars className="w-5 h-5" />
              </button>
              <h2 className="ml-4 lg:ml-0 text-xl font-semibold text-gray-800">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block text-sm text-gray-500">
                Welcome, Admin
              </span>
              <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                <FaUserCircle className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
