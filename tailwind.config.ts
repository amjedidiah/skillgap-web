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
        "twitter-blue": { DEFAULT: "#1D9BF0", 100: "#BCE1FB" },
        grey: {
          DEFAULT: "#8F8F8F",
          100: "#E6E6E6",
          200: "#8F8F8F",
          700: "#666B70",
        },
        "lil-dark-blue": {
          DEFAULT: "#0E80CE",
          100: "#F1F9FE",
        },
        "dm-l2": "#1D1F20",
        unknown: {
          100: "#320A01",
          200: "#25190E",
          300: "#E5CCFF",
        },
        yellow: { DEFAULT: "#DBBC1C", 2: "#FFDA44" },
        "light-yellow": "#FFFAE5",
        black: { DEFAULT: "#000000", 100: "#020B12" },
        "light-blue": "#E7F4FD",
        green: {
          DEFAULT: "#2A9D0D",
          3: "#E2FEE6",
        },
        purple: "#7900FB",
        "light-purple": "#EFE0FF",
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
