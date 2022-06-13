import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:9466",
  headers: {
    "Content-Type": "Application/json",
    token: localStorage.getItem("token") || "",
  },
});
const httpFile = axios.create({
  baseURL: "http://localhost:9466",
  headers: {
    "Content-Type": "multipart/form-data",
    token: localStorage.getItem("token") || "",
  },
});
const httpGet = axios.create({
  baseURL: "http://localhost:9466",
  // headers: { "Content-Type": "multipart/form-data" },
});
export { http, httpFile, httpGet };
