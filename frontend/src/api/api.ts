import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout for Render free tier
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors and provide better error messages
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle authentication errors
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    // Enhance error messages for common scenarios
    if (error.response?.data?.detail) {
      const detail = error.response.data.detail;
      
      // Map common backend errors to user-friendly messages
      if (detail.includes('Email already registered')) {
        error.userMessage = 'This email is already registered. Try logging in instead.';
      } else if (detail.includes('Incorrect email or password')) {
        error.userMessage = 'Invalid email or password. Please check your credentials.';
      } else if (detail.includes('password cannot be longer than 72 characters')) {
        error.userMessage = 'Password is too long. Please use 72 characters or less.';
      } else if (detail.includes('Invalid email format')) {
        error.userMessage = 'Please enter a valid email address.';
      } else if (detail.includes('age must be between 18 and 120')) {
        error.userMessage = 'Age must be between 18 and 120 years.';
      } else if (detail.includes('name is required')) {
        error.userMessage = 'Name is required.';
      } else if (detail.includes('password is required')) {
        error.userMessage = 'Password is required.';
      } else if (detail.includes('email is required')) {
        error.userMessage = 'Email is required.';
      } else {
        error.userMessage = detail;
      }
    } else if (error.code === 'NETWORK_ERROR' || error.message === 'Network Error') {
      error.userMessage = 'Unable to connect to the server. Please check your internet connection.';
    } else if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      error.userMessage = 'Request timed out. The server is taking longer than expected. Please try again.';
    } else if (error.response?.status === 500) {
      error.userMessage = 'Server error. Please try again later.';
    } else if (error.response?.status === 404) {
      error.userMessage = 'Service not found. Please contact support.';
    } else if (error.response?.status === 403) {
      error.userMessage = 'Access denied. You may not have permission for this action.';
    } else {
      error.userMessage = error.message || 'An unexpected error occurred.';
    }
    
    return Promise.reject(error);
  }
);

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  is_subscribed: boolean;
  is_admin: boolean;
  created_at: string;
  updated_at?: string;
}

export interface UserCreate {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  is_subscribed: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Token {
  access_token: string;
  token_type: string;
}

export const authAPI = {
  register: (userData: UserCreate): Promise<Token> =>
    api.post('/register', userData).then(res => res.data),
  
  login: (credentials: UserLogin): Promise<Token> =>
    api.post('/login', credentials).then(res => res.data),
  
  getMe: (): Promise<User> =>
    api.get('/me').then(res => res.data),
  
  getNewsletterSubscribers: (): Promise<User[]> =>
    api.get('/newsletter').then(res => res.data),
};

export default api;
