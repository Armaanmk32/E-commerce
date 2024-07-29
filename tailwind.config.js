/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primeryColor: "#fefae0",
        secondryColor: "#283618"
      }
    },
  },
  plugins: [],
}

