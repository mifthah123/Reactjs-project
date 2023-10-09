import React, { useEffect, useState } from "react";
import axios from "axios";

const ReduxApiFetch = () => {
  const [state, setState] = useState();

  const display = () => {
    setState(state + 1);
  };

  useEffect(() => {
    async function display() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
    }
    display();
  }, []);
  return (
    <div>
      <button onClick={display}>click</button>
      <h1>{state}</h1>
    </div>
  );
};

export default ReduxApiFetch;
