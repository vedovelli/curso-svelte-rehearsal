const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    ...(production
      ? [
          require("@fullhuman/postcss-purgecss")({
            // Specify the paths to all of the template files in your project
            content: [
              "./public/index.html",
              "./src/**/*.svelte",
              "./src/**/*.js",
            ],

            extract: true,

            // Include any special characters you're using in this regular expression
            defaultExtractor: (content) =>
              content.match(/[\w-/.:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
