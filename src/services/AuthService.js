import axios from "axios";

const authService = axios.create({
  baseURL: "http://206.189.92.79/api/",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;