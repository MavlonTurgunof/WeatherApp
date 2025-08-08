import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useWeatherContext } from "../context/WeatherContext";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [value, setValue] = useState("");
  const { setCity } = useWeatherContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setCity(value.trim());
    setValue("");
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-md:px-10">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search city..."
        className="w-[300px] text-gray-500 py-2 px-2 rounded-[10px] bg-[#f5f5f5] outline-none"
      />
      <div className="absolute max-md:hidden top-2 right-2">
        <HiOutlineSearch size={26} color="#0EA5E9" />
      </div>
    </form>
  );
}

export default SearchInput;
