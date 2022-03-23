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

export const createElement = (tag, props, ...children) => {
  props = props || {};
  return {
    tag,
    props,
    children,
  };
};

export const render = (vdom, container) => {
  container.appendChild(createDOM(vdom));
};
