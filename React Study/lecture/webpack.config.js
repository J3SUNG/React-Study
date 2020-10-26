const path = require("path");
const { webpack } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"],
  },
  devServer: {
    host: "127.0.0.1",
    contentBase: path.join(__dirname, "/"),
    compress: true,
    hot: true,
    inline: true,
    port: 9000,
    open: true,
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel",
          ],
        },
      },
    ],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
};
