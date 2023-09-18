import React from 'react'

function Propstate(props) {
  return (
    <div>
        
            {props.value.map((li)=>(
<h1>
{li.name}
</h1>
            ))}
        
    </div>
  )
}

export default Propstate