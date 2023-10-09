import React from 'react'
import { useSelector } from 'react-redux'

const NewChild = () => {
    const selector = useSelector((state)=>state.user.infoUser)
    console.log(selector);
    
  return (
    <div>
        new child
        {selector[0] &&selector[0].map((li)=>(
            <h1>{li.username}</h1>
        ))}
    </div>
  )
}

export default NewChild