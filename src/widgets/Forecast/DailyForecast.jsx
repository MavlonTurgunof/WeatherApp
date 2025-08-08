import React from "react";
import Container from "../../shared/ui/Container";
import ForecastCard from "../../shared/ui/ForeCastCard";
import { useGeolocation } from "../../shared/hooks/useGeoLocation";
import { useForecastByCoords } from "../../entities/forecast/api";
import { useForecastByCity } from "../../entities/forecast/forecastByCity";
import { useWeatherContext } from "../../shared/context/WeatherContext";

function DailyForecast() {
  const { city } = useWeatherContext();
  const { lat, lon, error } = useGeolocation();

  const forecastByCoords = useForecastByCoords(lat, lon);
  const forecastByCity = useForecastByCity(city);

  const forecastData = city ? forecastByCity.data : forecastByCoords.data;
  const isLoading = city
    ? forecastByCity.isLoading
    : forecastByCoords.isLoading;

  if (error) return <p className="text-red-500">{error}</p>;
  if (isLoading || !forecastData) return <p>Loading daily forecast...</p>;

  const dailyData = forecastData.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5)
    .map((item) => {
      const date = new Date(item.dt * 1000);
      const dateStr = date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });

      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: dateStr,
        temp: Math.round(item.main.temp),
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        feelsLike: Math.round(item.main.feels_like),
        description: item.weather[0].description,
        max: Math.round(item.main.temp_max),
        min: Math.round(item.main.temp_min),
        wind: item.wind.speed,
        rain: Math.round(item.pop * 100),
        humidity: item.main.humidity,
      };
    });

  return (
    <Container>
      <div className="my-4">
        <h1 className="text-[30px] font-bold text-primary">
          Daily Forecast {city ? `(${city})` : ""}
        </h1>
        <div className="flex flex-col gap-4 mt-6">
          {dailyData.map((day, idx) => (
            <ForecastCard key={idx} dayData={day} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default DailyForecast;
