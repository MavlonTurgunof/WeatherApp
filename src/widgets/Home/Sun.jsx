import React from "react";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
import { HiOutlineSun } from "react-icons/hi";

function Sun({ data, isLoading, error }) {
  if (error) return <p className="text-red-500">{error}</p>;
  if (isLoading || !data)
    return <p className="text-white">Loading weather...</p>;

  const sunriseDate = new Date(data.sys.sunrise * 1000);
  const sunsetDate = new Date(data.sys.sunset * 1000);

  // Format to HH:MM (24-hour format)
  const sunriseTime = sunriseDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunsetTime = sunsetDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="border-2 border-primary rounded-2xl p-3 bg-white mt-4 shadow-2xl">
      <div className="flex items-center gap-2 text-secondary text-[25px]">
        <HiOutlineSun /> <h1>Sunrise & Sunset</h1>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <FaCircleArrowUp size={25} color="#0ea5e9" />
          <h1 className="text-[30px]">{sunriseTime}</h1>
        </div>
        <div className="flex items-center gap-2">
          <FaCircleArrowDown size={25} color="#0ea5e9" />
          <h1 className="text-[30px]">{sunsetTime}</h1>
        </div>
      </div>
    </div>
  );
}

export default Sun;
