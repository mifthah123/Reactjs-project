import React, { useState } from "react";
import { Hello } from "../NewReact";

const ReactMemo = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);
  console.log("parent rendered");

  function show() {
    setState(state + 1);
  }

  function show1() {
    setState1(state1 + 1);
  }

  return (
    <div>
      <h2>{state}</h2>
      <h2>{state1}</h2>
      <button onClick={show}>click</button>
      <button onClick={show1}>click</button>
      <Hello value={state} />
    </div>
  );
};

export default ReactMemo;
