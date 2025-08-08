import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "en",
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
});
