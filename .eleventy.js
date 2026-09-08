module.exports = function (eleventyConfig) {
  // Static passthroughs — files copied as-is to output
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images/generated");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Watch data + images so dev server rebuilds on change
  eleventyConfig.addWatchTarget("src/data");
  eleventyConfig.addWatchTarget("src/assets/images/source");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "data",
      output: "dist",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
