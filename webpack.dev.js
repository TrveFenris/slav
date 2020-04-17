const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/i,
        loader: "source-map-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),    
    compress: true,
    port: 3000,
  },
});
