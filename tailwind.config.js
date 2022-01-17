module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3.5xl": "2rem",
      },
      colors: {
        "nasa-red": "#FC3D21",
        "nasa-blue": "#0B3D91",
      },
      flex: {
        mq: "1 1 25%",
      },
      zIndex: {
        under: "-10",
        1: "1",
        5: "5",
      },
      boxShadow: {
        cta: "0 0 25px #43bfff",
      },
    },
  },
  plugins: [],
};
