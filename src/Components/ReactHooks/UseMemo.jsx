import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const UseMemo = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);

  const display = () => {
    setState(state + 1);
  };

  const display1 = () => {
    setState1(state1 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return state % 2 === 0;
  }, [state]);

  // const isEven =()=>{
  //     let i=0
  //     while(i<2000000000)
  //     i++
  // return state%2===0
  // }

  const selectorMemo = useSelector((state) => state.user.infoUser);

  return (
    <div>
      <button onClick={display}> click</button>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={display1}> click</button>
      <div>{state}</div>
      <div>{state1}</div>
      {selectorMemo[0] && selectorMemo[0].map((li) => <h1>{li.username}</h1>)}
    </div>
  );
};

export default UseMemo;
