const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: `./frontend/_js/main.js`,
  output: {
    path: `${__dirname}/frontend/js`,
    filename: "index.js",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
