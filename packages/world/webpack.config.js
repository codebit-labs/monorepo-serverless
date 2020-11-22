const nodeExternals = require("webpack-node-externals");
const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
