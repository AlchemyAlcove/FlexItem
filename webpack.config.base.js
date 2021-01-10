const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HTMLWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { join } = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    historyApiFallback: true,
    port: 3322,
  },
  devtool: process.env.NODE_ENV === "production" ? false : "source-map",
  entry: {
    flexitem: ["./src/index.js"],
    demo: ["./demo/app.js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "eslint-loader",
            options: {
              emitWarning: true,
              failOnWarning: false,
            },
          },
        ],
      },
      {
        test: /\.style.js$/,
        exclude: /node_modules/,
        loader: "stylelint-custom-processor-loader",
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: join(__dirname, "assets/webpack_template.html"),
      filename: "index.html",
      inject: "body",
    }),
    process.env.NODE_ENV === "production" && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  optimization: {
    minimize: process.env.NODE_ENV === "production",
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5,
          output: {
            ascii_only: true,
          },
        },
      }),
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: join(__dirname, "dist/dev"),
  },
};
