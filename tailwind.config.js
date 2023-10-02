/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f3f2ef",
        white: "#fcfcff",
        mediumseagreen: {
          "100": "#1dc776",
          "200": "#0e9d5b",
          "300": "#009b59",
          "400": "rgba(29, 199, 118, 0.2)",
        },
        gray: {
          "100": "#7e7e7e",
          "200": "#131516",
          "300": "rgba(19, 21, 22, 0.5)",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(255, 255, 255, 0.8)",
        },
        black: "#000",
        white1: "#fff",
        gainsboro: "#d9d9d9",
        tomato: {
          "100": "#ff4741",
          "200": "rgba(255, 71, 65, 0.2)",
        },
        dodgerblue: {
          "100": "#0098ff",
          "200": "rgba(0, 152, 255, 0.5)",
        },
        darkslategray: {
          "100": "#2f4858",
          "200": "#284858",
        },
        midnightblue: "#2e2376",
        darkgray: {
          "100": "#b4b4b4",
          "200": "#999",
        },
        red: {
          "100": "#ff0000",
          "200": "#df0404",
        },
        steelblue: "#2e86ab",
        seagreen: "#008767",
        mediumaquamarine: {
          "100": "#65d2a0",
          "200": "#65d19f",
          "300": "#0bb88f",
        },
        springgreen: "#04f06a",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        inconsolata: "Inconsolata",
        inherit: "inherit",
        roboto: "Roboto",
      },
      borderRadius: {
        "195xl": "214px",
        "3xs": "10px",
        "31xl": "50px",
        "81xl": "100px",
        "51xl": "70px",
        "56xl": "75px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      sm: "14px",
      xs: "12px",
      "3xs": "10px",
      "11xl": "30px",
      mini: "15px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
