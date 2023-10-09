import React, { useContext } from 'react'
import { UserContext } from '../reducer-usecontext/reducerContext'

const ReducerContextProvide = () => {
    const {users}=useContext(UserContext)
    console.log(users);
  return (
    <div>
      <h1>
        {users.map((li)=>(
          <h1>{li.username}</h1>
        ))}
      </h1>
    </div>
  )
}

export default ReducerContextProvide