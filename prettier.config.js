/** @type {import("prettier").Options} */

module.exports = {
  printWidth: 240,
  overrides: [
    {
      files: ["*.html", "js/*.js"],
      options: {
        tabWidth: 4,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
