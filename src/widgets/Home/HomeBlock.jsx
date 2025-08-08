import React from "react";
import Container from "../../shared/ui/Container";
import HeroSection from "./HeroSection";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Sun from "./Sun";
import { useGeolocation } from "../../shared/hooks/useGeoLocation";
import { useCurrentWeatherByCoords } from "../../entities/weather/api";
import { useForecastByCoords } from "../../entities/forecast/api";
import { useCurrentWeatherByCity } from "../../entities/weather/weatherByCity";
import { useForecastByCity } from "../../entities/forecast/forecastByCity";
import { useWeatherContext } from "../../shared/context/WeatherContext";

function HomeBlock() {
  const { city, clearCity } = useWeatherContext();
  const { lat, lon, error: geoError } = useGeolocation();
  const weatherByCoords = useCurrentWeatherByCoords(lat, lon);
  const forecastByCoords = useForecastByCoords(lat, lon);
  const weatherByCity = useCurrentWeatherByCity(city);
  const forecastByCity = useForecastByCity(city);

  const weatherData = city ? weatherByCity.data : weatherByCoords.data;
  const forecastData = city ? forecastByCity.data : forecastByCoords.data;

  const isLoading = city
    ? weatherByCity.isLoading || forecastByCity.isLoading
    : weatherByCoords.isLoading || forecastByCoords.isLoading;

  const error = city
    ? weatherByCity.error || forecastByCity.error
    : geoError || weatherByCoords.error || forecastByCoords.error;

  const handleBackToLocation = () => {
    clearCity();
  };

  return (
    <Container>
      <div className="my-[5px]">
        <div className="flex justify-between gap-4">
          <HeroSection
            data={weatherData}
            isLoading={isLoading}
            error={error}
            handleBackToLocation={handleBackToLocation}
          />
          <div className="flex-1">
            <Hourly data={forecastData} isLoading={isLoading} error={error} />
            <Daily data={forecastData} isLoading={isLoading} error={error} />
            <Sun data={weatherData} isLoading={isLoading} error={error} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomeBlock;
