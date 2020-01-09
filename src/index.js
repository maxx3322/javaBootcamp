import React from "react";
import ReactDOM from "react-dom";

const name = "Max";
const favoriteNumber = Math.floor(Math.random() * 10);
const secondNumber = Math.floor(Math.random() * 10);
const answer = favoriteNumber * secondNumber;
var hahaha = function() {
  if (answer < 50) {
    return "your are less than 50";
  } else {
    return "you are bigger than 50";
  }
};

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>My favorite number is {answer}</p>
    <h2>{hahaha}</h2>
  </div>,
  document.getElementById("root")
);
