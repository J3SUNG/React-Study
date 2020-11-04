const path = require("path");
const { webpack } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"], // 파일을 적을때 해당 확장자를 적지 않아도 해당 확장자가 있는지 확인해줌
  },

  entry: {
    // 입력 부분, 파일 경로 지정
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, //js파일과 jsx를 rules 적용
        loader: "babel-loader", // babel과 연결 (호환 가능한 문법으로 변경)
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // babel 옵션 적용
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  output: {
    // 출력 부분, 경로와 파일이름 지정
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
