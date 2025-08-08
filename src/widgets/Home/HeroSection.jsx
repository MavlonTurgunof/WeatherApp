import React from "react";
import { FiDroplet } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { LuDroplets } from "react-icons/lu";
import { MdMyLocation, MdOutlineRemoveRedEye } from "react-icons/md";
import InfoDataCard from "../../shared/ui/InfoDataCard";

function BackgroundImage(weather) {
  if (weather === "Clouds") return "url('/cloudyDay.jpg')";
  if (weather === "Clear") return "url('/SunnyDay.jpeg')";
  if (weather === "Rain") return "url('/rainyday.jpg')";
  if (weather === "Snow") return "url('/snowyday.jpeg')";
  return;
}

export default function HeroSection({
  data,
  isLoading,
  error,
  handleBackToLocation,
}) {
  if (error) return <p className="text-red-500">{error}</p>;
  if (isLoading || !data)
    return <p className="text-white">Loading weather...</p>;
  const infoData = [
    { title: "FEELS LIKE", number: Math.round(data.main.feels_like) },
    { title: "PRECIPITATION", number: data.rain?.["1h"] || 0 }, // mm
    { title: "VISIBILITY", number: Math.round(data.visibility / 1000) }, // km
    { title: "HUMIDITY", number: data.main.humidity }, // %
  ];

  console.log(data);
  return (
    <div>
      <div
        className={`relative  w-full h-[calc(100dvh-75.6px)] p-2 rounded-2xl`}
        style={{
          backgroundImage: BackgroundImage(data.weather[0].main),
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="m-2 bg-black/30 text-white rounded-2xl p-4 h-[calc(100dvh-101.6px)]">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineLocationMarker size={18} />
                <h1 className="text-[16px] font-semibold">Current Location</h1>
              </div>

              <h2 className="text-[20px] font-bold mb-2">{data.name}</h2>
            </div>
            <button
              onClick={() => handleBackToLocation()}
              className="bg-white rounded-full p-1"
            >
              <MdMyLocation color="#0ea5e9" size={30} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex">
              <h1 className="text-[60px] font-semibold">
                {Math.round(data.main.temp)}
              </h1>
              <p className="text-[40px] font-semibold">°</p>
            </div>
            <h1 className="font-medium text-[30px]">{data.weather[0].main}</h1>
            <p className="text-[18px]">{data.weather[0].description}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-[100px]">
            {infoData.map((info) => (
              <InfoDataCard info={info} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
