import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [state,setState]=useState(0)

    useEffect(()=>{
        console.log('hai sughalle');
    },[state])
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>setState(state+1)}>+</button>
    </div>
  )
}

export default UseEffect