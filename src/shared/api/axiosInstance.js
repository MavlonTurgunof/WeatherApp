import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "en",
    appid: "3a9c2075dd1fb88b5c3fe8eae4ba4ecc",
  },
});
