// hooks
const hooks = [];
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
}

//Real DOM 만드는 코드
export const createDOM = (node) => {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  node.children.map(createDOM).forEach(element.appendChild.bind(element));
  return element;
};

const makeProps = (props, children) => ({
  ...props,
  children: children.length === 1 ? children[0] : children,
});
// useState hook
export function useState(initValue) {
  let position = currentComponent - 1;
  if (!hooks) {
    hooks[position] = initValue;
  }
  const modifier = (newValue) => {
    hooks[position] = newValue;
  };

  return [hooks[position], modifier];
}

//  VDOM 만드는 역할
export const createElement = (tag, props, ...children) => {
  props = props || {};
  if (typeof tag === "function") {
    // 클래스형 컴포넌트 위한 분기
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();

      // hook setting 제약사항 알기 위한 컨셉 코드
      hooks[currentComponent] = null;
      currentComponent++;
      //////////////////////////////////////
    } else {
      // 함수형 컴포넌트 분기
      if (children.length > 0) {
        return tag(makeProps(props, children));
      } else {
        return tag(props);
      }
    }
  } else {
    return {
      tag,
      props,
      children,
    };
  }
};

// export const render = (vdom, container) => {
//   container.appendChild(createDOM(vdom));
// };

//vdom 비교 하는 로직 초간단
export const render = (function () {
  let prevDOM = null;

  return function (vdom, container) {
    if (prevDOM === null) {
      prevDOM = vdom;
    }
    //diff
    container.appendChild(createDOM(vdom));
  };
})();
