import React from 'react'

const NewReact = (props) => {
    console.log('child rendered');
  return (
    <div><h1>{props.state}</h1></div>
  )
}

export default NewReact
export const Hello = React.memo(NewReact)