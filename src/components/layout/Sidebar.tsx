"use client"; // This directive is crucial for client-side functionality

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import {
  ChartBarIcon,
  UsersIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useAppContext } from "../../context/AppContext";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();
  const pathname = usePathname(); // Call the usePathname hook here to get the current path

  const navItems = [
    { name: "Dashboard", href: "/", icon: ChartBarIcon },
    { name: "Members", href: "/members", icon: UsersIcon },
    { name: "Roles", href: "/roles", icon: ShieldCheckIcon },
    { name: "Messages", href: "/messages", icon: ChatBubbleLeftRightIcon },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      <aside
        className={`transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }
        fixed inset-y-0 left-0 z-40 w-64 bg-discordDark p-4 transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:block
      `}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-discordPurple">Dashboard</h2>
          <button
            className="lg:hidden text-white"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav aria-label="Main Navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className="flex items-center p-3 text-lg text-white hover:bg-discordLightGrey rounded-lg transition-colors duration-200"
                  onClick={toggleSidebar}
                  // CORRECTED LINE: Use 'pathname' from usePathname hook instead of 'window.location.pathname'
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <item.icon className="h-6 w-6 mr-3" aria-hidden="true" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
