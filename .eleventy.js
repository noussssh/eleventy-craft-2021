module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("mail");
  eleventyConfig.addPassthroughCopy("video");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("assets/css");

  eleventyConfig.setTemplateFormats([
    "md",
    "css", // css is not yet a recognized template extension in Eleventy
    "jpg",
    "png",
    "img",
    "njk",
    "webp",
  ]);
};
