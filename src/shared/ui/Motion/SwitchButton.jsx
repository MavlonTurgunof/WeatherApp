import React from "react";
import * as motion from "motion/react-client";
function SwitchButton({ isDark, toggleTheme }) {
  return (
    <button
      style={{
        ...container,
        justifyContent: isDark ? "flex-start" : "flex-end",
        backgroundColor: isDark ? "#4B5563" : "#E5E7EB",
      }}
      onClick={toggleTheme}
    >
      <motion.div
        style={{
          ...handle,
          backgroundColor: isDark ? "#FACC15" : "#1F2937",
        }}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}

const container = {
  width: 60,
  height: 30,
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  padding: 4,
};

const handle = {
  width: 22,
  height: 22,
  borderRadius: "50%",
};

export default SwitchButton;
