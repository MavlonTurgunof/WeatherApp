import React from "react";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
import { HiOutlineSun } from "react-icons/hi";

function Sun({ data }) {
  const sunriseDate = new Date(data?.sys.sunrise * 1000);
  const sunsetDate = new Date(data?.sys.sunset * 1000);
  const sunriseTime = sunriseDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunsetTime = sunsetDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="border-2 border-primary rounded-2xl p-3 bg-white mt-4 shadow-2xl max-md:mb-10">
      <div className="flex items-center gap-2 text-secondary text-[25px]">
        <HiOutlineSun /> <h1>Sunrise & Sunset</h1>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <FaCircleArrowUp size={25} color="#0ea5e9" />
          <h1 className="md:text-[30px] text-[20px]">{sunriseTime}</h1>
        </div>
        <div className="flex items-center gap-2">
          <FaCircleArrowDown size={25} color="#0ea5e9" />
          <h1 className="md:text-[30px] text-[20px]">{sunsetTime}</h1>
        </div>
      </div>
    </div>
  );
}

export default Sun;
