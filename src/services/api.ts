import Axios, { AxiosInstance } from "axios";

const api: AxiosInstance = Axios.create({
  baseURL: "https://api.github.com",
});

export default api;
