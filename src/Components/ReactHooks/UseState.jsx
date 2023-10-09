import React, { useState } from "react";
import Child from "../Child";
import { Link } from "react-router-dom";

function UseState() {
  const [state, setState] = useState("black");

  function display() {
    setState("green");
  }
  function increment() {
    setState(state - 1);
  }

  function reset() {
    setState(0);
  }

  return (
    <div style={{ backgroundColor: `${state}` }}>
      <Link to={"ref"}>
        <h1>{state}</h1>
      </Link>

      <button onClick={display}>+</button>
      <button onClick={increment}>-</button>
      <button onClick={reset}>reset</button>
      <Child value={state} />
      <Link to={'use-params/12314456555'}>click me for the link</Link>
    </div>
  );
}

export default UseState;
