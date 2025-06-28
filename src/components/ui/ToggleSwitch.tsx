import React, { useState } from "react";

interface ToggleSwitchProps {
  initialState: boolean;
  onToggle: (newState: boolean) => void;
  label?: string;
  id: string; // Required for accessibility
}

const ToggleSwitch = ({
  initialState,
  onToggle,
  label,
  id,
}: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle(newState);
  };

  return (
    <div className="flex items-center space-x-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-300 cursor-pointer"
        >
          {label}
        </label>
      )}
      <button
        id={id}
        role="switch"
        aria-checked={isOn}
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
          isOn ? "bg-discordPurple" : "bg-gray-600"
        }`}
      >
        <span
          aria-hidden="true"
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
