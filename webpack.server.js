const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  mode: "development",
  entry: "./src/server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        loader: "ignore-loader",
      },
    ],
  },
};

module.exports = config;
