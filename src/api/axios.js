import axios from "axios";
import LocalStorageService from "../utils/LocalStorageService";
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.interceptors.request.use(
  (config) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    const token = LocalStorageService.getAccessToken();
    console.log(token);
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
