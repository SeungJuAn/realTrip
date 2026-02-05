import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // Add any custom logic before the request is sent
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 공통 에러 처리
    if (error.response?.status === 401) {
      // TODO: 로그인 페이지로 리다이렉트
      localStorage.removeItem("authToken");
      window.location.href = "/login";
      console.error("인증이 필요합니다.");
    }
    return Promise.reject(error);
  },
);

export const getHealthCheck = async () => {
  const response = await api.get("/health");
  return response.data;
};

export default api;
