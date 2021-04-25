module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },

    extend: {
      colors: {
        green: {
          DEFAULT: "#008260",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
