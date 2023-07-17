/** @type {import('prettier').Options} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
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
};
