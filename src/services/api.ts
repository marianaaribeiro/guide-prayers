import axios, { AxiosError } from "axios";

const API_URL = import.meta.env.VITE_API_URL ?? "${VITE_API_URL}";
const API_KEY = import.meta.env.VITE_API_KEY ?? "${VITE_API_KEY}";
const API_HOST = import.meta.env.VITE_API_HOST ?? "${VITE_API_HOST}";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 90000,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
});

api.interceptors.request.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.error(`Interceptors API Request -> ${error}`);
  }
);
