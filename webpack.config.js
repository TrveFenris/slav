const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = (env) => {
  const commonConfig = {
    entry: "./src/index",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif|ico)$/i,
          exclude: /node_modules/,
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: "file-loader",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public/index.html"),
        favicon: path.join(__dirname, "public/favicon.ico"),
      }),
    ],
  };

  const prodConfig = {
    mode: "production",
  };

  const devConfig = {
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
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 3000,
    },
  };

  return merge(commonConfig, env.production ? prodConfig : devConfig);
};
