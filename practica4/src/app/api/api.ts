import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-p4-klvc.onrender.com/api",
  headers: {
    "x-nombre": "GabrielAstorga",
  },
});

api.interceptors.request.use((config) => {
  const token = document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;