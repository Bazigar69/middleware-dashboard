import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:7207" });


API.interceptors.request.use((req) => {
  if (localStorage.getItem("userInfo")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userInfo")).token
    }`;
  }

  return req;
});

/**
 * Authentication Routes
 */
export const login = (reqBody) => API.post("/api/users/login", reqBody);