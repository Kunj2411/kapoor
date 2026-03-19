// Tailwind v4 — design tokens are defined in globals.css via @theme.
// This file is kept for explicit content path declaration only.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
