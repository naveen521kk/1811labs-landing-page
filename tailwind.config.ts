import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary-button":
          "linear-gradient(180deg, rgba(255, 79, 0, 0.80) 0%, #FF4F00 100%)",
      },
      boxShadow: {
        "primary-button": "0px 4px 6px 0px rgba(30, 7, 81, 0.12);",
      },
    },
  },
  plugins: [],
};
export default config;
