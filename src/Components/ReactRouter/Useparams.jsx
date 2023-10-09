import React from 'react'
import { useParams } from 'react-router-dom'

const Useparams = () => {
    const {id} = useParams()
  return (
    <div>Useparams
        <h1>{id}</h1>
    </div>
  )
}

export default Useparams