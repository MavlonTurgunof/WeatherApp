import React from "react";
import ThemeToggle from "./ThemeToggle";
import Container from "../../shared/ui/Container";
import AddingNewCity from "./AddingNewCity";
import LoadingThreeDotsJumping from "../../shared/ui/Motion/LoadingThreeDotsJumping";

function SettingsBlock() {
  return (
    <div className="bg-white dark:bg-darkMode  pt-10 h-[calc(100dvh-65.6px)]">
      <Container>
        <div className="flex flex-col items-center justify-center md:p-10 md:bg-primary/10 md:rounded-2xl md:mx-40">
          <ThemeToggle />
          <AddingNewCity />
        </div>
      </Container>
    </div>
  );
}

export default SettingsBlock;
