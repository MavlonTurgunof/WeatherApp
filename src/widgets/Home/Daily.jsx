import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import DailyCard from "../../shared/ui/DailyCard";

const Daily = ({ data }) => {
  const todayStr = new Date()
    .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" })
    .replace(/\./g, "/");

  const dailyData = data?.list
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
      <div className="flex items-center gap-2 text-secondary dark:text-white md:text-[25px] text-[20px]">
        <HiOutlineCalendar /> <h1 className="font-semibold">5 DAY FORECAST</h1>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-4 mt-2">
        {dailyData?.map((day, index) => (
          <DailyCard
            day={day}
            key={day.date}
            todayStr={todayStr}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Daily;
