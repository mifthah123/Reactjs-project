import React from 'react'

const ChildCallBack = (props) => {
    console.log('child rendered');
props.value()

  return (
    <div>
        
    </div>
  )
}


export default ChildCallBack
export const Hello = React.memo(ChildCallBack) 