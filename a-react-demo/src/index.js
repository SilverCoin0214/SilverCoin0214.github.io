// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import Didact from "./Didact";

const container = document.getElementById("root");

/** @jsx Didact.createElement */
const element1 = (
  <div id="foo">
    <a>bar</a>
    <h2>这都可以</h2>
    <b>呀哈哈</b>
  </div>
);
// const element1 = Didact.createElement(
//   "div",
//   { id: "foo" },
//   Didact.createElement("a", null, "bar"),
//   Didact.createElement("h2", null, "这都可以"),
//   Didact.createElement("b", null, "呀哈哈")
// );

Didact.render(element1, container);
