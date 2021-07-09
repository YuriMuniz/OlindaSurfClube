import axios from "axios";

const api = axios.create({
  baseURL: "https://endpoint.teste",

  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;
