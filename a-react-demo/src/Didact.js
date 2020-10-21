export function createElement(type, props, ...children) {
  // createElement实际就是返回一个react element对象, 里面包含主要的属性是 type和props
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export function render(element, container) {
  //   判断节点是否是文本节点, 如果是文本节点就创建文本节点, 不是就创建元素节点
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  // 将element对象里的props属性除了children属性添加到真实dom上
  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  // 循环将子节点也都渲染成真实dom
  element.props.children.forEach((child) => {
    render(child, dom);
  });

  // 把真实dom挂载到root上
  container.appendChild(dom);
}

export default {
  createElement,
  render,
};
