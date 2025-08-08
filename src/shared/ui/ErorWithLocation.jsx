import React from "react";

function ErorWithLocation() {
  return (
    <div className="bg-white dark:bg-darkMode text-center pt-10 h-[calc(100dvh-65.6px)] text-red-500 md:text-[30px] text-[15px]">
      <h1>
        We couldn’t detect your location. Please enable location or search for a
        city.
      </h1>
    </div>
  );
}

export default ErorWithLocation;
