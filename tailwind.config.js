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
        "hero-light": "url('../assets/images/backgrounds/dots-bk.png')",
        "hero-dark": "url('../assets/images/backgrounds/dots-wh.png')",
        "logo-light": "url('../assets/images/logo/logo-lt.png')",
        "logo-dark": "url('../assets/images/logo/logo-dk.png')",
        "logo-red": "url('../assets/images/logo/logo-rd.png')",
        "theme-light": "url('../assets/images/icons/theme-lt.png')",
        "theme-dark": "url('../assets/images/icons/theme-dk.png')",
        "theme-red": "url('../assets/images/icons/theme-rd.png')",
        "menu-light": "url('../assets/images/icons/menu-lt.png')",
        "menu-dark": "url('../assets/images/icons/menu-dk.png')",
        "menu-red": "url('../assets/images/icons/menu-rd.png')",
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
