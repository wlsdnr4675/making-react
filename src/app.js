// 리액트 기본 vdom 만들기
// @babel/preset-react 의 jsx 옵션 => 기본은 React.createElement => 우리가 만든 createElement로 사용하기위해 옵션 변경

/* @jsx createElement */
import { render, createElement } from "./react";

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

const vdom = (
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style="color : red"> 첫 번쨰 아이템</li>
      <li style="color : blue"> 두 번쨰 아이템</li>
      <li style="color : green"> 세 번쨰 아이템</li>
    </ul>
  </p>
);

console.log("vdom", vdom);
render(vdom, document.querySelector("#root"));
