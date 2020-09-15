const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: process.env.production
      ? "[name].[chunkhash].js"
      : "[name].[hash].js",
    path: path.resolve(__dirname, "server/view"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 1,
        },
        reactBundle: {
          test: /[\\/]node_modules[\\/](react|react-router)[\\/]/,
          name: "react.bundle",
          priority: 2,
          minSize: 100,
        },
      },
    },
  },
  devtool: "inline-source-map",
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
                  modules: false,
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
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  mode: "development",
};