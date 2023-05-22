const path = require("path");
// const CracoLessPlugin = require("craco-less");

// const alias = require("./src/craco_config/aliases");

// const resolvedJestAliases = Object.fromEntries(
//   Object.entries(alias("<rootDir>/src")).map(([key, value]) => [
//     `^${key}/(.*)$`,
//     `${value}/$1`,
//   ]),
// );

const isProd = process.env.REACT_APP_NODE_ENV === "production";

module.exports = {
  devServer: {
    port: 4002,
    historyApiFallback: true,
    hot: true,
  },
  webpack: {
    alias: {
      "@apis": path.resolve(__dirname, "./src/apis"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@components": path.resolve(__dirname, "./src/views/components"),
      "@pages": path.resolve(__dirname, "./src/views/pages"),
      "@locales": path.resolve(__dirname, "./src/locales"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@apps": path.resolve(__dirname, "./src/apps"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@globalTypes": path.resolve(__dirname, "./src/types"),
    },
    devtool: isProd ? "hidden-source-map" : "inline-source-map",
    optimization: {
      splitChunks: {
        chunks: "all",
      },
      minimize: true,
    },
    performance: {
      hints: false,
    },
  },
  plugins: [],
};
