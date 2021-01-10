const baseConfig = require("./webpack.config.base");
const { join } = require("path");

const externals = {
  lodash: {
    commonjs: "lodash",
    commonjs2: "lodash",
    root: "_",
  },
};

const umdBuild = {
  ...baseConfig,
  entry: "./src/index.js",
  plugins: [],
  externals,
  output: {
    path: join(__dirname, "dist/umd"),
    filename: process.env.NODE_ENV === "production" ? "index.min.js" : "index.js",
    library: "flexItem",
    libraryTarget: "umd",
  },
};

const cjsBuild = {
  ...baseConfig,
  plugins: [],
  externals,
  output: {
    path: join(__dirname, "dist/cjs"),
    filename: process.env.NODE_ENV === "production" ? "index.min.js" : "index.js",
    libraryTarget: "commonjs2",
  },
};

module.exports = [umdBuild, cjsBuild];
