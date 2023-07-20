/** @type {import("prettier").Options} */

module.exports = {
  printWidth: 250,
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
