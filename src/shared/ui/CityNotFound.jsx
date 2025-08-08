import React from "react";
import Container from "./Container";

function CityNotFound() {
  return (
    <div className="bg-white dark:bg-darkMode h-[calc(100dvh-65.6px)]">
      <Container>
        <div className="">
          <h1 className="text-[30px] font-bold text-primary dark:text-white text-center pt-30">
            City not Found!!!
          </h1>
        </div>
      </Container>
    </div>
  );
}

export default CityNotFound;
