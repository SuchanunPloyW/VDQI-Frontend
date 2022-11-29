import axios from "axios";

const authService = axios.create({
  baseURL: "https://vdqi-db.toyotaparagon.com/api/",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;