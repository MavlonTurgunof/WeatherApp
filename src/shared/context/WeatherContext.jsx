import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState(null);
  const [defaultCity, setDefaultCity] = useState(null);

  useEffect(() => {
    const savedDefault = localStorage.getItem("defaultCity");
    if (savedDefault) {
      setDefaultCity(savedDefault);
      setCity(savedDefault);
    }
  }, []);

  const saveDefaultCity = (cityName) => {
    localStorage.setItem("defaultCity", cityName);
    setDefaultCity(cityName);
    setCity(cityName);
  };

  const useCurrentLocation = () => {
    setCity(null);
  };

  const removeDefaultCity = () => {
    localStorage.removeItem("defaultCity");
    setDefaultCity(null);
    setCity(null);
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        defaultCity,
        saveDefaultCity,
        useCurrentLocation,
        removeDefaultCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(WeatherContext);
}
