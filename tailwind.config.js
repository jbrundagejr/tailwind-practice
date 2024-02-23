/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1353ba",
      },
      fontFamily: {
        "poppins-light": ["Poppins Light", "sans"],
      },
    },
  },
  plugins: [],
}
