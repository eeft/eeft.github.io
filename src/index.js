
import React from "react";
import ReactDOM from "react-dom";
import bluebird from "bluebird";
import App from "./app";

const rootElement = document.getElementById("root");

global.Promise = bluebird;

Promise.config({
  warnings: process.env.NODE_ENV !== "production",
  cancellation: true,
});

ReactDOM.render(<App/>,
  rootElement,
);

console.log("this works");