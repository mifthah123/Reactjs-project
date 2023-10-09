import React, { useReducer } from "react";
import NewComponent from "../NewComponent";
import "./UsereducerHook.css";

function UseReducerHook() {
  const InitialState = 0;

  const reducer = (state, action) => {
    // switch (action.type) {
    //   case "increase":
    //     return (state = state + 1);
    //   case "decrease":
    //     return (state = state  >0? state-1:0);
    //   case "increment2":
    //     return (state = state + 2);
    //   case "decrement2":
    //     return (state = state >0 ?state-2:0);
    //     case 'reset':
    //         return(state=0)
    //   default:
    //     return state;

    if (action.type === "increase") {
      return (state = state + 1);
    } else if (action.type === "decrease") {
      return (state = state > 0 ? state - 1 : 0);
    } else if (action.type === "increment2") {
      return (state = state + 2);
    } else if (action.type === "decrement2") {
      return (state = state > 0 ? state - 2 : 0);
    } else if (action.type === "reset") {
      return (state = 0);
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        decrease
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment2" });
        }}
      >
        increment2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2" });
        }}
      >
        decrement2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
      <div className="new-component">
        <NewComponent value={state} />
      </div>
    </div>
  );
}

export default UseReducerHook;
