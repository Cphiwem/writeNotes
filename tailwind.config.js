const plugin = require("tailwindcss");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      colors: {
        darkbg: "#1e293b",
        darkbluebg: "#831843",
        blue: {
          350: "#dbeafe",
        },
      },
    },
  },
  plugins: [],
};
