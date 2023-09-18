import React, { useContext } from 'react'
import { Appcontext } from './context'

function Usecontext() {
  const value=useContext(Appcontext)
  return (
    <div>
        <h1>
            {value}
        </h1>
    </div>
  )
}

export default Usecontext
