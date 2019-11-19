const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      utils: path.resolve(__dirname, "utils")
    };
    return config;
  }
};
