import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#495D6E",
        "primary-dark": "#324556",
        cta: "#D89042",
        "cta-dark": "#8b5000",
        dark: "#212223",
        neutral: "#7F7E7C",
        surface: "#fcf9f6",
        "surface-low": "#f6f3f0",
        "surface-card": "#ffffff",
      },
      boxShadow: {
        ambient: "0 20px 40px -15px rgba(73, 93, 110, 0.12)",
        "ambient-lg": "0 30px 60px -20px rgba(73, 93, 110, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
