/** @type {import("prettier").Options} */

module.exports = {
  printWidth: 300,
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
