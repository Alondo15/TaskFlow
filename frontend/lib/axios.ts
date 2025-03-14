import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
