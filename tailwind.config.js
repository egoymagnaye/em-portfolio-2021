module.exports = {
  /* purge: [], */
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          em100: "#3C3C3C",
          em200: "#363636",
          em300: "#333333",
        },
        yellow: { em100: "#F8CF2B" },
        red: { em100: "#722a2e" },
      },
    },
    fontFamily: {
      sans: ["OpenSansLight", "ui-sans-serif"],
      serif: ["CormorantGaramond", "ui-serif"],
    },
  },
  variants: {
    extend: { display: ["dark"] },
  },
  plugins: [],
};
