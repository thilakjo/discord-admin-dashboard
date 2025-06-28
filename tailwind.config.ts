import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Corrected to target all files correctly
  ],
  theme: {
    extend: {
      colors: {
        discordDark: "#2C2F33",
        discordGrey: "#36393F",
        discordLightGrey: "#424549",
        discordGreen: "#43b581",
        discordRed: "#f04747",
        discordPurple: "#7289DA", // Primary Discord blue
      },
    },
  },
  plugins: [],
};
export default config;
