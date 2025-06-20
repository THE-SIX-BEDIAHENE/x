// Data service for handling localStorage operations
// This can be easily replaced with API calls later

const STORAGE_KEYS = {
  PROJECTS: "adminProjects",
  NEWS: "adminNews",
  AUTH_TOKEN: "adminToken",
};

export const dataService = {
  // Projects
  getProjects: () => {
    try {
      const projects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return projects ? JSON.parse(projects) : [];
    } catch (error) {
      console.error("Error loading projects:", error);
      return [];
    }
  },

  saveProjects: (projects) => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
      return true;
    } catch (error) {
      console.error("Error saving projects:", error);
      return false;
    }
  },

  // News
  getNews: () => {
    try {
      const news = localStorage.getItem(STORAGE_KEYS.NEWS);
      return news ? JSON.parse(news) : [];
    } catch (error) {
      console.error("Error loading news:", error);
      return [];
    }
  },

  saveNews: (news) => {
    try {
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
      return true;
    } catch (error) {
      console.error("Error saving news:", error);
      return false;
    }
  },

  // Auth
  getAuthToken: () => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  setAuthToken: (token) => {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  removeAuthToken: () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  // Utility functions
  generateId: () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  },

  formatDate: (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  },
};
