import defaultTheme from 'tailwindcss/defaultTheme';;
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4285f4",

          "secondary": "#4285f4",

          "accent": "#ffffff",

          "neutral": "#6b7280",

          "base-100": "#ffffff",

          "info": "#68df88",

          "success": "#fbbc05",

          "warning": "#ee685d",

          "error": "#ea4335",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

