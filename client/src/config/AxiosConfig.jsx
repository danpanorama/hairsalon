import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://samia.co.il/",
  // baseURL: "http://localhost:3000/",
});



export default axiosInstance;
