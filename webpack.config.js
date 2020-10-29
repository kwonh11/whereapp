const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressPlugin = require("compression-webpack-plugin");
const faviconPath = path.resolve(__dirname, "template");
const prod = process.env.NODE_ENV === "production";
console.log(`production mode? ${prod}`);

module.exports = {
  mode: prod ? "production" : "development",
  entry: {
    app: ["babel-polyfill", "./src/index.js"],
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "server/view"),
  },
  optimization: {
    concatenateModules: true,
    providedExports: true,
    minimize: prod ? true : false,
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
  devtool: prod ? "cheap-module-source-map" : "eval",
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
                  targets: { node: "current" },
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
    new CompressPlugin(),
  ],
};
