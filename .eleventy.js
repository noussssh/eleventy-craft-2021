module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");

  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    if (!date) return "";
    const d = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  });

  // ISO date format for sitemap
  eleventyConfig.addFilter("dateToISO", function(date) {
    if (!date) return new Date().toISOString();
    return new Date(date).toISOString();
  });

  // Truncate filter for meta descriptions
  eleventyConfig.addFilter("truncate", function(str, length) {
    if (!str) return "";
    if (str.length <= length) return str;
    return str.substring(0, length).trim() + "...";
  });

  // Strip HTML for meta descriptions
  eleventyConfig.addFilter("stripHtml", function(str) {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, '');
  });

};
