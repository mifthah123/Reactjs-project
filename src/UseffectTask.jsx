import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Propstate from './Propstate'

function UseffectTask() {
    const[state,setState]=useState([])
    useEffect(()=>{
        
async function display(){
    //try catch explained here
    try{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data);
    setState(res.data)
}catch(err){
    console.log(err);
}finally{
    console.log('finally worked');
}

}
display()
    },[])
  return (
    <div>
{state.map((li)=>(
    <>
    <h1>{li.name}{li.username}</h1>
    <p>{li.address.city}</p>
    </>
))}
<Propstate value={state}/>
    </div>
  )
}

export default UseffectTask