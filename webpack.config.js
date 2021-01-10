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
  plugins: [],
  externals,
  output: {
    path: join(__dirname, "dist/umd"),
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
    libraryTarget: "commonjs2",
  },
};

module.exports = [umdBuild, cjsBuild];
