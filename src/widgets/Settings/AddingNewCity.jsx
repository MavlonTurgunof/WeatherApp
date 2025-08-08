import React, { useState } from "react";
import { useWeatherContext } from "../../shared/context/WeatherContext";
import Button from "../../shared/ui/Button";

function AddingNewCity() {
  const [value, setValue] = useState("");
  const { saveDefaultCity, defaultCity, removeDefaultCity } =
    useWeatherContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    saveDefaultCity(value.trim());
    setValue("");
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col items-center gap-6"
      >
        <h1 className="text-black dark:text-white text-[20px] font-bold whitespace-nowrap">
          Add Default City
        </h1>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-3 py-2 bg-gray-100 border-2 border-primary rounded-2xl"
          placeholder="Add city..."
        />
        <Button type="submit" variant="primary" fullWidth>
          Save
        </Button>
      </form>

      {defaultCity && (
        <div className="flex items-center gap-4 bg-white rounded-[10px] w-fit p-2">
          <p className="text-lg text-black font-bold">
            Current default city: {defaultCity}
          </p>
          <Button onClick={removeDefaultCity} variant="danger">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddingNewCity;
