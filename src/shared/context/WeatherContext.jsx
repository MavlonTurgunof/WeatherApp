import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState(null);

  const clearCity = () => {
    setCity(null);
    localStorage.removeItem("defaultCity");
  };

  return (
    <WeatherContext.Provider value={{ city, setCity, clearCity }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(WeatherContext);
}
