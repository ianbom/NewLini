import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F26B45",
          orangeHover: "#DF5530",
          orangeLight: "#FFF5F1",
          navy: "#15213C",
          navySecondary: "#101D35",
          navyDark: "#0E1B32",
          navyDarker: "#0A1324",
          softWhite: "#F8F9FB",
          mutedText: "#6B7485",
          borderLight: "#E4E8EF",
          borderDark: "#202D4A",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
