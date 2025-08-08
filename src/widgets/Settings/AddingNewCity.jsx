import React, { useState } from "react";
import { useWeatherContext } from "../../shared/context/WeatherContext";

function AddingNewCity() {
  const [value, setValue] = useState("");
  const { saveDefaultCity, defaultCity, removeDefaultCity } =
    useWeatherContext();

  return (
    <div className="flex flex-col gap-4 mt-6">
      <form
        onSubmit={() => {
          if (!value.trim()) return;
          saveDefaultCity(value.trim());
          setValue("");
        }}
        className="flex md:flex-row flex-col items-center gap-6"
      >
        <h1 className="text-black dark:text-white text-[20px] font-bold">
          Add Default City
        </h1>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-3 py-2 bg-gray-100 border-2 border-primary rounded-2xl"
          placeholder="Add city..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary rounded-2xl text-white max-md:w-full"
        >
          Save
        </button>
      </form>
      {defaultCity && (
        <div className="flex items-center gap-4 bg-white rounded-[10px] w-fit p-2 md:ml-45">
          <p className="text-lg text-black  font-bold">{defaultCity}</p>
          <button
            onClick={removeDefaultCity}
            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default AddingNewCity;
