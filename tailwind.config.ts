import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "868px" },
      tablet: { min: "834px", max: "1023px" },
      desktop: { min: "1024px" },
    },
    extend: {
      fontSize: {
        "nav-xs": ["var(--nav-xs)", "var(--nav-xs-line)"],
      },
    },
  },
  plugins: [],
};

export default config;
