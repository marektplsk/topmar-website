import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "833px" },
      tablet: { min: "834px", max: "1023px" },
      desktop: { min: "1024px" },
    },
    extend: {
      colors: {
        white: "#FEFEFE",
        whiteNav: "#F5F5F7",
        black: "#181818",
        blue: "#006BD8",
        "dark-dark-gray": "#242226",
        red: "#FF3F34",
        "light-gray": "#F5F5F7",
        green: "#3ABF5B",
        spaceGray: "#48484A",
        "secondary-tertiary": "#919092",
      },
      fontSize: {
        nav: ["12px", { lineHeight: "16px", letterSpacing: "0.01em" }],
        "nav-mobile": ["12px", { lineHeight: "32px", letterSpacing: "0.01em" }],
      },
    },
  },
  plugins: [],
};

export default config;
