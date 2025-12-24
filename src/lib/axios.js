import axios from "axios";
import { URL_BACKEND_LOCAL, URL_BACKEND_PROD } from "../constants";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? `${URL_BACKEND_LOCAL}/api` : `${URL_BACKEND_PROD}/api`,
  withCredentials: true,
});
