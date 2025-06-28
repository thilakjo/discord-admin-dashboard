"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface AppContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  theme: string;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Explicitly type theme as 'light' or 'dark'

  useEffect(() => {
    // This effect runs once on mount to determine and set the initial theme
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    let initialTheme: "light" | "dark";
    if (storedTheme === "dark") {
      // Explicitly check for 'dark' string
      initialTheme = "dark";
    } else if (storedTheme === "light") {
      // Explicitly check for 'light' string
      initialTheme = "light";
    } else if (systemPrefersDark) {
      initialTheme = "dark";
    } else {
      initialTheme = "light";
    }

    setTheme(initialTheme);
    applyThemeToHtml(initialTheme); // Apply the detected initial theme
  }, []); // Empty dependency array, runs once on mount

  // Helper function to apply/remove classes on the <html> element
  const applyThemeToHtml = (currentTheme: "light" | "dark") => {
    const htmlElement = document.documentElement;
    if (currentTheme === "dark") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light"); // Ensure 'light' is removed
    } else {
      htmlElement.classList.add("light"); // Ensure 'light' is added
      htmlElement.classList.remove("dark"); // Ensure 'dark' is removed
    }
    htmlElement.setAttribute("data-theme", currentTheme); // Optional: for custom CSS, good for debugging
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeToHtml(newTheme); // Apply the new theme
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, toggleSidebar, theme, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
