const withCSS = require("@zeit/next-css");
const withMdxFm = require("next-mdx-frontmatter")();
const withImages = require("next-images");
const path = require("path");
require("dotenv").config();

const env = {};

module.exports = withImages(
  withMdxFm(
    withCSS({
      env,
      exportTrailingSlash: true,
      webpack: config => {
        // eslint-disable-next-line
        config.resolve.alias = {
          ...config.resolve.alias,
          "@": path.resolve(__dirname)
        };
        return config;
      }
    })
  )
);
