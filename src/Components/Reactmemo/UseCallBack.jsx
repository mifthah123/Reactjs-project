import React, { useCallback, useState } from "react";
import { Hello } from "./ChildCallBack";

const UseCallBack = () => {
  const [state, setState] = useState(0);
  console.log("parent rendered");
  function show() {
    setState(state + 1);
  }
  const handleClick = () => {};
  const MemoizedClick = useCallback(handleClick, []);
  return (
    <div>
      hai
      <button onClick={show}>click</button>
      <h1>{state}</h1>
      <Hello value={MemoizedClick} />
    </div>
  );
};

export default UseCallBack;
