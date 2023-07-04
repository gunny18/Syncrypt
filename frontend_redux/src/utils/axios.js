import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3500/api",
  baseURL: "https://syncrypt-backend.onrender.com/api",
});
