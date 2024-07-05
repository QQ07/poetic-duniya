/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        hand: "url(hand.cur), pointer",
        normal: "url(normal.cur), pointer",
      },
    },
  },
  plugins: [],
};

