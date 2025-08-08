// ForecastCard.jsx

import { FiDroplet } from "react-icons/fi";
import { LuDroplets, LuWind } from "react-icons/lu";
import { TbMathMaxMin } from "react-icons/tb";

function ForecastCard({ dayData }) {
  const {
    day,
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
    <div className="border-2 border-primary p-6 rounded-xl text-black shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center mb-2 border-r-2 border-primary pr-4">
          <img src={icon} alt={date} className="w-40 h-40" />
          <div>
            <h3 className="text-[30px] font-semibold">{day}</h3>
            <div className="flex items-baseline">
              <p className="text-[60px] font-semibold">{temp}°C</p>
              <p className="text-[20px] font-semibold">
                / Feels like: {feelsLike}°C
              </p>
            </div>
            <p className="capitalize font-medium text-[20px]">{description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-[20px] font-bold">
          <div className="flex items-center gap-4">
            <TbMathMaxMin size={30} />
            <p className="font-normal">Min/Max:</p>
            <p>
              {min}° / {max}°
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

        <div className="flex items-center gap-2 text-primary text-[20px]">
          <LuDroplets />
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
