import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // You can add custom props here if needed
}

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`w-full p-2 rounded-md bg-discordLightGrey border border-discordDark focus:outline-none focus:ring-2 focus:ring-discordPurple text-white ${className}`}
      {...props}
    />
  );
};

export default Input;
