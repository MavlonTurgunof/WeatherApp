import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useWeatherContext } from "../../shared/context/WeatherContext";

function SearchInput() {
  const [value, setValue] = useState("");
  const { setCity } = useWeatherContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setCity(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search city..."
        className="w-[300px] text-secondary py-2 px-2 rounded-[10px] bg-[#f5f5f5]"
      />
      <div className="absolute top-2 right-2">
        <HiOutlineSearch size={26} color="#0EA5E9" />
      </div>
    </form>
  );
}

export default SearchInput;
