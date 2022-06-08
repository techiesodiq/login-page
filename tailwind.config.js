module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D74DA",
        secondary: "#79A6F6",
      },
      spacing: {
        eye: "-2.76rem",
      },
    },
    fontSize: {
      onboardingHeader: "1.5rem",
      mainHeader: "1.25rem",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    letterSpacing: {
      spread: ".21em",
    },
  },
  plugins: [],
};
