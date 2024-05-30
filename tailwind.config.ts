import type { Config } from "tailwindcss"


const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ["var(--font-general-sans)"],
      },
      colors: {
        "twitter-blue": { DEFAULT: "#1D9BF0", 100: "#BCE1FB" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        grey: {
          DEFAULT: "#8F8F8F",
          100: "#E6E6E6",
          700: "#666B70",
        },
        "light-grey": "#D0D5DD",
        "lil-dark-blue": {
          DEFAULT: "#0E80CE",
          100: "#F1F9FE",
        },
        "dm-l2": "#1D1F20",
        unknown: {
          100: "#320A01",
          200: "#25190E",
          300: "#E5CCFF",
          400: "#F5FBFE",
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
      screens: {
        "2xl": "1400px",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config