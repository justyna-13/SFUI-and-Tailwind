const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        ".red-primary": {
          color: "#EE2E24",
        },
        ".red-secondary": {
          color: "rgba(238, 46, 36, 0.5);",
        },
        ".yellow-primary": {
          color: "#F99B2A",
        },
        ".yellow-secondary": {
          color: "#E18517",
        },
        ".dark-primary": {
          color: "#1D1F22",
        },
        ".dark-secondary": {
          color: "#43464E",
        },
        ".white": {
          color: "#ffffff",
        },
        ".bg-dark-primary": {
          background: "#1D1F22",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
