// ForecastCard.jsx

import { FiDroplet } from "react-icons/fi";
import { LuDroplets, LuWind } from "react-icons/lu";
import { TbMathMaxMin } from "react-icons/tb";
import { formatTemp } from "../lib/helper";

function ForecastCard({ dayData }) {
  const {
    date,
    temp,
    icon,
    feelsLike,
    min,
    max,
    wind,
    rain,
    humidity,
    description,
  } = dayData;

  return (
    <div className="border-2 border-primary md:p-6 p-4 rounded-xl text-black dark:text-white shadow-md">
      <div className="flex md:flex-row flex-col items-start justify-between">
        <div className="flex md:items-center mb-2 md:border-r-2 md:border-primary md:pr-4">
          <img src={icon} alt={date} className="md:w-40 md:h-40 w-25 h-25" />
          <div>
            <h3 className="md:text-[30px] text-[20px] font-semibold">{date}</h3>
            <div className="flex items-baseline">
              <p className="md:text-[60px] text-[40px] font-semibold">
                {formatTemp(temp)}
              </p>
              <p className="md:text-[20px] text-[13px] font-semibold">
                / Feels like: {formatTemp(feelsLike)}
              </p>
            </div>
            <p className="capitalize font-medium md:text-[20px] text-[15px]">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:text-[20px] text-[15px] font-bold">
          <div className="flex items-center gap-4">
            <TbMathMaxMin size={30} />
            <p className="font-normal">Min/Max:</p>
            <p>
              {formatTemp(min)} / {formatTemp(max)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <LuWind size={30} />
            <p className="font-normal">Wind: </p>
            <p>{wind} m/s</p>
          </div>
          <div className="flex items-center gap-4">
            <FiDroplet size={30} />
            <p className="font-normal">Chance of rain: </p>
            <p>{rain}%</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-primary text-[20px] max-md:mt-5">
          <LuDroplets />
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
