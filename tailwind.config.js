/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#EADFB1",
          200: "#9F8641",
          300: "#B79B4E"
        },
        dark: {
          50: "#9CA3AF",
          300: "#151515",
          200: "#1F1F20",
        },
        white: {
          900: "#FAFAFA"
        }
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}