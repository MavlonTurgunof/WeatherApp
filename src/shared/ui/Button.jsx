import React from "react";
import clsx from "clsx";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
}) {
  const baseStyles =
    "px-4 py-2 rounded-2xl font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    danger: "bg-red-500 text-white rounded-lg hover:bg-red-600",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], fullWidth && "w-full")}
    >
      {children}
    </button>
  );
}

export default Button;
