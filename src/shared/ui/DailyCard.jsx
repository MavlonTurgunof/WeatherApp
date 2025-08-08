import React from "react";

function DailyCard({ day, todayStr, index }) {
  return (
    <div
      key={index}
      className={`flex flex-col items-center justify-center rounded-xl p-4 w-full ${
        index === 0
          ? "bg-primary/30 scale-105 shadow-2xl"
          : "bg-primary/10 shadow-md"
      }`}
    >
      <p className="text-xs text-gray-400 dark:text-white">
        {day.date === todayStr ? "Today" : day.day}
      </p>
      <p className="text-xs text-gray-500 dark:text-white">{day.date}</p>
      <p className="text-[30px] font-semibold mt-2 dark:text-white">
        {day.temp}°
      </p>
      <img src={day.icon} alt="weather icon" className="w-10 h-10 mt-2" />
    </div>
  );
}

export default DailyCard;
