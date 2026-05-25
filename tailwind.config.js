export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: { xs: "475px" },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "DM Sans", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        slate: {
          850: "#1e293b",
          950: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};