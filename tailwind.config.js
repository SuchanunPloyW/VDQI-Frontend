module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "green-in": "#89EB80",
        "red-in": "#EB8080",
        "gray-in": "#D9D9D9",
      },
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans Thai", "sans-serif"],
      },

      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        32: "repeat(32, minmax(0, 1fr))",
        33: "repeat(33, minmax(0, 1fr))",
        56: "repeat(56, minmax(0, 1fr))",
        57: "repeat(57, minmax(0, 1fr))",
        55: "repeat(55, minmax(0, 1fr))",
        /*    'footer': '200px minmax(900px, 1fr) 100px', */
      },
      boxShadow: {
        fix: "0 4px 8px 0 rgba(0, 0, 0, 0.2) ",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
