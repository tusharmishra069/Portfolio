/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scrollDot: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(46px)" },
        },
      },
      animation: {
        scrollDot: "scrollDot 10s infinite",
      },
    },
  },
  plugins: [],
};
