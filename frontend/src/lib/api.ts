import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://infinite-backend-delta.vercel.app" // Check this URL is correct!
    : "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor to handle errors globally if needed
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
