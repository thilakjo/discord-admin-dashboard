import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../context/AppContext";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Admin Dashboard",
  description: "Frontend-only Discord Server Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The 'light' or 'dark' class will be dynamically added to this html tag by AppContext
    <html lang="en">
      <body className={`${inter.className} flex h-screen overflow-hidden`}>
        <AppProvider>
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Navbar />
            {/* Main content area: switches background and text based on theme */}
            <main className="flex-1 p-6 overflow-y-auto bg-gray-100 text-gray-800 dark:bg-discordLightGrey dark:text-white">
              {children}
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
