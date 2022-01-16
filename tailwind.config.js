module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      /* backgroundImage: {
        navbar: "url('./assets/images/navbar-bg.png')",
      }, */
      fontSize: {
        "3.5xl": "2rem",
      },
      colors: {
        "nasa-red": "#FC3D21",
      },
      flex: {
        mq: "1 1 25%",
      },
      zIndex: {
        under: "-1"
      },
    },
  },
  plugins: [],
};
