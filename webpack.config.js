// webpack과 babel settings
// yarn add init -y
// webpack-cli
// webpack-dev-server, babel-loader, @babel/core , @babel/preset-env, @babel/preset-react, html-webpack-plugin
// mkdir webpack.config.js
// webpack은 exports를 사용해서 만들어줘야한다.

// -> webpack이 하는일 entry의 자바스크립트를 읽어서 어떤 변환과정을 거쳐 output한다.
// 변환 과정이 어떤 일을 할지는 webpack이 아닌 다른 프로그램들이 어떤 변환과정을 거쳐 webpack의 출력으로 전송한다.
// 이것이 bundling 프로세스 앵겔프로그램을 받아서 하나의 파일을 만들어내는 과정을 말한다.
// 하나의 파일을 만들때 또하나의 처리과정이 필요할 수도 있다 그 일을 하는 것을 webpack에서는 plugin이라 부른다.
// 과정 : 1. entry에 있는 자바스크립트 파일에서 입력값을 받고
//        2. module의 소프트웨어들한테 그 입력값을 넘겨줌
//        3. 모듈에서 특정 파일을 처리함 transpile을 해줌
//        4. 플러그인 한테 넘기고 플러그인처리후
//        5. output로 보냄

// html-webpack-plugin : html파일을 받아서 최종적인 output 파일을 템플릿화 또는 부가적인 처리를 가능하게 해주는 패키지
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 다른 OS에서 같은 파일 위치를 찾아주는 노드에서 제공해주는 path __dirname: 현재 디렉토리라는 의미
const path = require("path");

module.exports = {
  // webpack이 최종적으로 서비스할 용도의 파일인가 아닌가 스위칭하는 옵션
  mode: "development",
  // 어떤 자바스크립트에서 시작?
  entry: "./app.js",
  // 출력 정보
  output: {
    // 어느 디렉토리 명을 쓸꺼야 주로 distribution인 dist를 많이 사용
    path: path.resolve(__dirname, "dist"),
    // 어떤 파일 이름을 쓸꺼야
    filename: "bundle.js",
  },
  devServer: {
    compress: true,
    port: 9999,
  },
  module: {
    // webpack이 정한 규칙
    // 로더들을 지정하는 부분이다.
    rules: [
      {
        // 어떤 로더 이름인지 적어준다.
        use: {
          // 모든 파일들을 바벨로더 처리하지 않는 파일들을 제거해줘야함.=> test, exclude
          test: /\.js$/, //true 인것만
          exclude: /node_modules/, // false 인것만
          loader: "babel-loader",
          options: {
            // 미리 설치한 바벨 플러그인을 설정해주면 된다.
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  //
  plugins: [
    // 스펙은 인스턴스를 만들어줘야함. => new  객체 사용
    new HtmlWebpackPlugin({
      title: "2.3 setup webpack & babel",
      template: "index.html",
    }),
  ],
};
