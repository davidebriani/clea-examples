const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    },
  },
  module: {
    rules: [
      { test: /\.css$/, type: "asset/source" },
      { test: /\.svg$/, type: "asset/inline" }
    ],
  },
};
