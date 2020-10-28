const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const { DefinePlugin } = require("webpack");
const faviconPath = path.resolve(__dirname, "template");
const BabelPluginImport = require("babel-plugin-import");

const prod = process.env.NODE_ENV === "production";
module.exports = {
  mode : prod? "production" : "development",
  entry: {
    app: ["babel-polyfill", "./src/index.js"],
  },
  output: {
    filename: process.env.production
      ? "[name].[chunkhash].js"
      : "[name].[hash].js",
    path: path.resolve(__dirname, "server/view"),
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        reactBundle: {
          test: /[\\/]node_modules[\\/](react|react-router-dom)[\\/]/,
          name: "react.bundle",
          priority: 1,
          minSize: 100,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 2,
        },
      },
    },
  },
  devtool: prod? "hidden-source-map" : "eval",
  devServer: {
    port: 9000,
    proxy: {
      "**": "http://localhost:8000",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { node: "current"},
                  modules: false
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/",
              name: "[name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./template/index.html",
      favicon: `${faviconPath}/faviconA.ico`,
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  mode: "development",
};
