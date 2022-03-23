// 리액트 기본 vdom 개념
const createDOM = (node) => {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);
  node.children.map(createDOM).forEach(element.appendChild.bind(element));
  return element;
};

const vdom = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["React 만들기"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {},
          children: ["1. 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["2. 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["3. 아이템"],
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDOM(vdom));
