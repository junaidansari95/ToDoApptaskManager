import React from "react";
import ReactDOM from "react-dom";
import Task from "./Task/Task"
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>To do app!</h1>
      <Task />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
