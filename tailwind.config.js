/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "100vh": "calc(100% - 40px)",
      },
    },
  },
  plugins: [],
};
