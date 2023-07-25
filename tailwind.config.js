/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.html", "js/*.js"],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#ffffff",
      offwhite: "#eeeeee",
      black: "#000000",
      red: "#eb0028",
      blue: "#1877f2",
      green: "#1ed760",
      yellow: "#fffc05",
      snow: "#fafafa",
      ice: "#f5f5f7",
      silver: "#a1a1a6",
      gunmetal: "#515154",
      charcoal: "#1d1d1f",
      coal: "#151516",
    },
    fontSize: {
      xs: "0.5rem",
      sm: "0.75rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
      "8xl": "8rem",
      "9xl": "9rem",
      "10xl": "10rem",
    },
    data: {
      scrolled: "scrolled='true'",
      expanded: "expanded='true'",
    },
    extend: {
      fontFamily: {
        sans: ['"SF Pro"', '"Product Sans"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "cards-black": "url('../assets/images/backgrounds/cards-bk.png')",
        "cards-white": "url('../assets/images/backgrounds/cards-wh.png')",
        "dots-black": "url('../assets/images/backgrounds/dots-bk.png')",
        "dots-white": "url('../assets/images/backgrounds/dots-wh.png')",
        "lines-black": "url('../assets/images/backgrounds/lines-bk.png')",
        "lines-white": "url('../assets/images/backgrounds/lines-wh.png')",
        "polygons-black": "url('../assets/images/backgrounds/polygons-bk.png')",
        "polygons-white": "url('../assets/images/backgrounds/polygons-wh.png')",
      },
      transitionProperty: {
        DEFAULT: "background-image, height, font-size, " + defaultTheme.transitionProperty.DEFAULT,
        background: "background-color, background-image",
        font: "font-size, color",
      },
      animation: {
        "fade-200": "fade 0.2s ease-in-out 1",
        "fade-1000": "fade 1s ease-in-out 1",
        "slide-up": "slide-up 0.5s ease-out 1",
        "slide-down": "slide-down 0.5s ease-out 1",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
