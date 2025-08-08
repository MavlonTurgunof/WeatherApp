import React from "react";
import { FiDroplet } from "react-icons/fi";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { LuDroplets } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function getIcon(title) {
  if (title === "FEELS LIKE") return <LiaTemperatureLowSolid />;
  if (title === "PRECIPITATION") return <FiDroplet />;
  if (title === "VISIBILITY") return <MdOutlineRemoveRedEye />;
  return <LuDroplets />;
}

function InfoDataCard({ info }) {
  return (
    <div
      key={info.title}
      className="bg-black/60 p-4 rounded-2xl flex flex-col justify-center"
    >
      <h1 className="text-[#636c75] flex items-center gap-2 md:text-[20px] text-[15px]">
        {getIcon(info.title)}
        {info.title}
      </h1>
      <div className="flex gap-2 text-white items-center justify-center">
        <h1 className="text-[30px] font-medium">{info.number}</h1>
        <p className="text-lg">
          {info.title === "FEELS LIKE"
            ? "°"
            : info.title === "PRECIPITATION"
            ? "mm"
            : info.title === "VISIBILITY"
            ? "km"
            : "%"}
        </p>
      </div>
    </div>
  );
}

export default InfoDataCard;
