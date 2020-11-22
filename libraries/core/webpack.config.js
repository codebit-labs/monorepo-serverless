const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./core.ts",
  mode: "production",
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
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
};
