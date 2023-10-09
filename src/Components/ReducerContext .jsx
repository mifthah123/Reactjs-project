import React, { useContext, useEffect } from 'react'
import { UserContext } from '../reducer-usecontext/reducerContext'
import axios from 'axios'

const ReducerContext  = () => {
    const {dispatch}=useContext(UserContext)

    useEffect(()=>{
    async  function display(){
        const res=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res);
        dispatch({types:'LoginSuccess',payload:res.data})
      }
    display()
    },[])
        
  
  return (
    <div>ReducerContext </div>
  )
}

export default ReducerContext 