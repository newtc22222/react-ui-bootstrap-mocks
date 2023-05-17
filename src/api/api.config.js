import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

let accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 || !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await axios.post("/auth/refreshToken", { refreshToken });
      accessToken = response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return await axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
