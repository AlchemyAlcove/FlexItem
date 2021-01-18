const baseConfig = require("./webpack.config.dev");
const { join } = require("path");

const externals = {
  react: {
    commonjs: "react",
    commonjs2: "react",
    root: "React"
  },
  "@emotion/react": {
    commonjs: "@emotion/react",
    commonjs2: "@emotion/react",
    root: "emotionReact"
  },
  "prop-types": {
    commonjs: "prop-types",
    commonjs2: "prop-types",
    root: "PropTypes"
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
  entry: "./src/index.js",
  plugins: [],
  externals,
  output: {
    path: join(__dirname, "dist/cjs"),
    filename: process.env.NODE_ENV === "production" ? "index.min.js" : "index.js",
    libraryTarget: "commonjs2",
  },
};

module.exports = [umdBuild, cjsBuild];
