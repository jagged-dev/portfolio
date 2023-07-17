/** @type {import("prettier").Options} */
module.exports = {
  overrides: [
    {
      files: ["**/*.{html,css}", "js/*.js"],
      options: {
        tabWidth: 4,
      },
    },
    {
      files: "*.html",
      options: {
        printWidth: 100,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
