import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";

const Daily = ({ data, isLoading, error }) => {
  if (error) return <p className="text-red-500">{error}</p>;
  if (isLoading || !data) return <p>Loading daily forecast...</p>;

  const todayStr = new Date()
    .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" })
    .replace(/\./g, "/");

  const dailyData = data.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5)
    .map((item) => {
      const date = new Date(item.dt * 1000);
      const dateStr = date
        .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" })
        .replace(/\./g, "/");

      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: dateStr,
        temp: Math.round(item.main.temp),
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      };
    });

  console.log(data);

  return (
    <div className="w-full mt-2">
      <div className="flex items-center gap-2 text-secondary text-[25px]">
        <HiOutlineCalendar /> <h1 className="font-semibold">5 DAY FORECAST</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {dailyData.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center rounded-xl p-4 w-full ${
              index === 0
                ? "bg-primary/30 scale-105 shadow-2xl"
                : "bg-primary/10 shadow-md"
            }`}
          >
            <p className="text-xs text-gray-400">
              {day.date === todayStr ? "Today" : day.day}
            </p>
            <p className="text-xs text-gray-500">{day.date}</p>
            <p className="text-2xl font-semibold mt-2">{day.temp}°</p>
            <img src={day.icon} alt="weather icon" className="w-10 h-10 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;
