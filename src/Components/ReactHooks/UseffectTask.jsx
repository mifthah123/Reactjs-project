import axios from "axios";
import React, { useEffect, useState } from "react";
import Propstate from "../Propstate";
import { useDispatch } from "react-redux";
import { reduxFunction,removeData } from "../../Redux/Redux";

function UseffectTask() {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function display() {
      //try catch explained here
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res.data);
        setState(res.data);
        dispatch(reduxFunction(res.data));
      } catch (err) {
        console.log(err);
      } finally {
        console.log("finally worked");
      }
    }
    display();
  },[]);

  const display=()=>{
    dispatch(removeData())
  }
  return (
    <div>
      {state.map((li) => (
        <>
          <h1>
            {li.name}
            {li.username}
          </h1>
          <p>{li.address.city}</p>
        </>
      ))}
      <button onClick={display}>
        click for clear data
      </button>
      <Propstate value={state} />
    </div>
  );
}

export default UseffectTask;
