"use client";

import { useState } from "react";

import SwitchButton from "../../shared/ui/Motion/SwitchButton";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex items-center gap-6 mt-4">
      <h1 className="text-black dark:text-white text-[20px] font-bold">
        Switch theme
      </h1>
      <SwitchButton isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}
