"use client"; // Ensure this is at the top

import React from "react";
import {
  BellIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useAppContext } from "../../context/AppContext";
// No need to import Image from 'next/image' for this if you're directly using <img> with static assets from public/

const Navbar = () => {
  const { toggleSidebar, theme, toggleTheme } = useAppContext();

  return (
    <nav className="bg-discordDark p-4 shadow-md flex justify-between items-center">
      <button
        className="lg:hidden text-white"
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <h1
        className="text-xl font-semibold text-white ml-4 lg:ml-0"
        aria-label="Discord Server Admin Dashboard"
      >
        Discord Server Admin
      </h1>
      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full hover:bg-discordLightGrey transition-colors"
          aria-label="Notifications"
        >
          <BellIcon className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-discordLightGrey transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-blue-400" />
          )}
        </button>
        <div className="flex items-center space-x-2">
          {/* Replace with the path to your image in the public folder */}
          <img
            src="/my-admin-photo.jpg"
            alt="Admin User Avatar"
            className="w-8 h-8 rounded-full border-2 border-discordPurple"
          />
          <span className="text-white font-medium hidden sm:block">
            AdminUser
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
