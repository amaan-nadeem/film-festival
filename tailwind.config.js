module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        lightBlue: "#007AE6",
        dullishBlack: "#1F1F1F",
        gray: "#f5f5f5"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
