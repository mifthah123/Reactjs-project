import React from 'react'
import { useSelector } from 'react-redux'

const Useselctor = () => {
    const selectorInfo = useSelector((state)=>state.user.infoUser)
    console.log(selectorInfo);
  return (
    <div>

    </div>
  )
}

export default Useselctor