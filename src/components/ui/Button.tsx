import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "bg-discordPurple text-white hover:bg-discordPurple/80 focus:ring-discordPurple";
      break;
    case "secondary":
      variantClasses =
        "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500";
      break;
    case "danger":
      variantClasses =
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
      break;
    default:
      variantClasses =
        "bg-discordPurple text-white hover:bg-discordPurple/80 focus:ring-discordPurple";
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
