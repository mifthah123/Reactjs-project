import React from 'react'
import { useNavigate } from 'react-router-dom';

const TimeDelay = () => {

    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/')
    },5000 );
  return (
    <div></div>
  )
}

export default TimeDelay