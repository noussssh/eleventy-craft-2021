module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");

  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    if (!date) return "";
    const d = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  });

};
