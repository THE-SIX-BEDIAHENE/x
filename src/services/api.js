const API_BASE_URL = 'https://study-x-api-2d1a.onrender.com';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('adminToken');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('adminToken', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('adminToken');
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
    };
  }

  async login(username, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      this.setToken(data.accessToken);
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Projects API
  async getProjects() {
    try {
      const response = await fetch(`${API_BASE_URL}/listProjects`);
      if (!response.ok) throw new Error('Failed to fetch projects');
      return await response.json();
    } catch (error) {
      console.error('Get projects error:', error);
      throw error;
    }
  }

  async getProjectBySlug(slug) {
    try {
      const response = await fetch(`${API_BASE_URL}/readMore/${slug}`);
      if (!response.ok) throw new Error('Failed to fetch project');
      return await response.json();
    } catch (error) {
      console.error('Get project error:', error);
      throw error;
    }
  }

  async createProject(projectData) {
    try {
      const response = await fetch(`${API_BASE_URL}/newProjects`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(projectData),
      });
      if (!response.ok) throw new Error('Failed to create project');
      return await response.json();
    } catch (error) {
      console.error('Create project error:', error);
      throw error;
    }
  }

  async updateProject(id, projectData) {
    try {
      const response = await fetch(`${API_BASE_URL}/editProjects/${id}`, {
        method: 'PATCH',
        headers: this.getHeaders(),
        body: JSON.stringify(projectData),
      });
      if (!response.ok) throw new Error('Failed to update project');
      return await response.json();
    } catch (error) {
      console.error('Update project error:', error);
      throw error;
    }
  }

  async deleteProject(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/removeProject/${id}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete project');
      return await response.json();
    } catch (error) {
      console.error('Delete project error:', error);
      throw error;
    }
  }

  // News/Blogs API
  async getNews() {
    try {
      const response = await fetch(`${API_BASE_URL}/viewBlogs`, {
        headers: this.getHeaders(),
      });
      if (!response.ok) throw new Error('Failed to fetch news');
      return await response.json();
    } catch (error) {
      console.error('Get news error:', error);
      throw error;
    }
  }

  async getNewsBySlug(slug) {
    try {
      const response = await fetch(`${API_BASE_URL}/readBlog/${slug}`, {
        headers: this.getHeaders(),
      });
      if (!response.ok) throw new Error('Failed to fetch news item');
      return await response.json();
    } catch (error) {
      console.error('Get news item error:', error);
      throw error;
    }
  }

  async createNews(newsData) {
    try {
      const response = await fetch(`${API_BASE_URL}/postBlog`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(newsData),
      });
      if (!response.ok) throw new Error('Failed to create news');
      return await response.json();
    } catch (error) {
      console.error('Create news error:', error);
      throw error;
    }
  }

  async updateNews(id, newsData) {
    try {
      const response = await fetch(`${API_BASE_URL}/editBlog/${id}`, {
        method: 'PATCH',
        headers: this.getHeaders(),
        body: JSON.stringify(newsData),
      });
      if (!response.ok) throw new Error('Failed to update news');
      return await response.json();
    } catch (error) {
      console.error('Update news error:', error);
      throw error;
    }
  }

  async deleteNews(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/removeBlog/${id}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete news');
      return await response.json();
    } catch (error) {
      console.error('Delete news error:', error);
      throw error;
    }
  }
}

export const apiService = new ApiService(); 