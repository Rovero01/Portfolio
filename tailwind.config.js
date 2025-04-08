/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "",
      },
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: "0" },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     to: { height: "0" },
      //     from: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   tickers: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(calc(-50% - 20px))" },
      //   },
      //   "infinite-scroll": {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(calc(-50% - 20px))" },
      //   },
      //   animation: {
      //     "accordion-down": "accordion-down 0.2s ease-out",
      //     "accordion-up": "accordion-up 0.2s ease-out",
      //     tickers: "tickers 40s linear infinite",
      //     "infinite-scroll": "infinite-scroll 40s linear infinite",
      //   },
      // },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
