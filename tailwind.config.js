/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#e3202c",
          "secondary": "#000054",
          "accent": "#fac800",
          "neutral": "#F74E3B",
          "base-100": "#FFFFFF",
          "base-200": "#f5f5f5",
        },
      },
      "dark",
      "emerald",
    ],
  },
}
