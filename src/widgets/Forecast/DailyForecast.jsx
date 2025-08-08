import React from "react";
import Container from "../../shared/ui/Container";
import ForecastCard from "../../shared/ui/ForeCastCard";
import { useGeolocation } from "../../shared/hooks/useGeolocation";
import { useForecastByCoords } from "../../entities/forecast/api";
import { useForecastByCity } from "../../entities/forecast/forecastByCity";
import { useWeatherContext } from "../../shared/context/WeatherContext";
import LoadingThreeDotsJumping from "../../shared/ui/Motion/LoadingThreeDotsJumping";
import CityNotFound from "../../shared/ui/CityNotFound";
import { formatDate } from "../../shared/lib/helper";

function DailyForecast() {
  const { city } = useWeatherContext();
  const { lat, lon, error: geoError } = useGeolocation();

  const forecastByCoords = useForecastByCoords(lat, lon);
  const forecastByCity = useForecastByCity(city);

  const forecastData = city ? forecastByCity.data : forecastByCoords.data;
  const isLoading = city
    ? forecastByCity.isLoading
    : forecastByCoords.isLoading;

  const error = city ? forecastByCity.error : forecastByCoords.error;

  if (error) return <CityNotFound />;
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

  const dailyData = forecastData?.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5)
    .map((item) => {
      const date = new Date(item.dt * 1000);
      const dateStr = formatDate(date);

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
    <div className="bg-white dark:bg-darkMode">
      <Container>
        {isLoading || !forecastData ? (
          <div className="mt-[300px] h-[calc(100dvh-365.6px)]">
            <LoadingThreeDotsJumping />
          </div>
        ) : (
          <div className="md:py-4 pb-10">
            <h1 className="md:text-[30px] text-[25px] font-bold text-primary dark:text-white">
              Daily Forecast {city ? `(${city})` : ""}
            </h1>
            <div className="flex flex-col gap-4 mt-6">
              {dailyData.map((day, idx) => (
                <ForecastCard key={idx} dayData={day} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default DailyForecast;
