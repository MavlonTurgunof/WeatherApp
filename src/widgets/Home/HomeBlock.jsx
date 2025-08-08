import React from "react";
import Container from "../../shared/ui/Container";
import HeroSection from "./HeroSection";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Sun from "./Sun";

import { useCurrentWeatherByCoords } from "../../entities/weather/api";
import { useForecastByCoords } from "../../entities/forecast/api";
import { useCurrentWeatherByCity } from "../../entities/weather/weatherByCity";
import { useForecastByCity } from "../../entities/forecast/forecastByCity";
import { useWeatherContext } from "../../shared/context/WeatherContext";
import LoadingThreeDotsJumping from "../../shared/ui/Motion/LoadingThreeDotsJumping";
import CityNotFound from "../../shared/ui/CityNotFound";
import { useGeolocation } from "../../shared/hooks/useGeolocation";

function HomeBlock() {
  const { city } = useWeatherContext();
  const { lat, lon, error: geoError } = useGeolocation();

  const weatherByCoords = useCurrentWeatherByCoords(lat, lon);
  const forecastByCoords = useForecastByCoords(lat, lon);

  const weatherByCity = useCurrentWeatherByCity(city);
  const forecastByCity = useForecastByCity(city);

  const isUsingCity = Boolean(city);

  const weatherData = isUsingCity ? weatherByCity.data : weatherByCoords.data;
  const forecastData = isUsingCity
    ? forecastByCity.data
    : forecastByCoords.data;

  const isLoading = isUsingCity
    ? weatherByCity.isLoading || forecastByCity.isLoading
    : weatherByCoords.isLoading || forecastByCoords.isLoading;

  const error = isUsingCity
    ? weatherByCity.error || forecastByCity.error
    : weatherByCoords.error || forecastByCoords.error;

  if (error) return <CityNotFound />;

  console.log(weatherData);

  if (geoError && !city) {
    return (
      <div className="bg-white dark:bg-darkMode text-center pt-10 h-[calc(100dvh-65.6px)] text-red-500 md:text-[30px] text-[15px]">
        <h1>
          We couldn’t detect your location. Please enable location or search for
          a city.
        </h1>
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-darkMode max-md:px-2 ">
      <Container>
        {isLoading ? (
          <div className="mt-[300px] h-[calc(100dvh-365.6px)]">
            <LoadingThreeDotsJumping />
          </div>
        ) : (
          <div className="py-[5px] ">
            <div className="flex md:justify-between md:flex-row flex-col md:gap-4 ">
              <HeroSection data={weatherData} />
              <div className="flex-1 max-md:pt-4">
                <Hourly data={forecastData} />
                <Daily data={forecastData} />
                <Sun data={weatherData} />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default HomeBlock;
