// 리액트 기본 vdom 만들기
// @babel/preset-react 의 jsx 옵션 => 기본은 React.createElement => 우리가 만든 createElement로 사용하기위해 옵션 변경
// jsx 컴파일러가 createElement를 사용  => import 시켜줘야함 그래서 React 컴포넌트에서 React가 임포트 해와야 하는 이유.

/* @jsx createElement */
import { render, createElement, Component } from "./react";

// const vdom = {
//   tag: "p",
//   props: {},
//   children: [
//     {
//       tag: "h1",
//       props: {},
//       children: ["React 만들기"],
//     },
//     {
//       tag: "ul",
//       props: {},
//       children: [
//         {
//           tag: "li",
//           props: { style: "color:red" },
//           children: ["1. 아이템"],
//         },
//         {
//           tag: "li",
//           props: { style: "color:blue" },
//           children: ["2. 아이템"],
//         },
//         {
//           tag: "li",
//           props: { style: "color:green" },
//           children: ["3. 아이템"],
//         },
//       ],
//     },
//   ],
// };

// const vdom = createElement(
//   "p",
//   {},
//   createElement("h1", {}, "React 만들기"),
//   createElement(
//     "ul",
//     {},
//     createElement("li", { style: "color:red" }, "첫 번째 아이템"),
//     createElement("li", { style: "color:blue" }, "두 번째 아이템"),
//     createElement("li", { style: "color:green" }, "세 번째 아이템")
//   )
// );

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

const Item = (props) => {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
};
const App = () => (
  <p>
    <Title>React 클래스 컴포넌트 만들기</Title>

    <h1>React 만들기</h1>
    <ul>
      <Item color="red"> 첫 번쨰 아이템</Item>
      <Item color="blue"> 두 번쨰 아이템</Item>
      <Item color="green"> 세 번쨰 아이템</Item>
    </ul>
  </p>
);

render(<App />, document.querySelector("#root"));
