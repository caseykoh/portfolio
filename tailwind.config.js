/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
      animation: {
        slideFadeIn: "slideFadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        slideFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)", // Start 20px above
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)", // End in its slot
          },
        },
      },
    },
  },
  plugins: [],
};
