import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ["var(--font-general-sans)"],
      },
      colors: {
        "twitter-blue": "#1D9BF0",
        grey: {
          DEFAULT: "#8F8F8F",
          100: "#E6E6E6",
          700: "#666B70",
        },
        "lil-dark-blue": {
          DEFAULT: "#0E80CE",
          100: "#F1F9FE",
        },
        "dm-l2": "#1D1F20",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
