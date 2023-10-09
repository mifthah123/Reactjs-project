import React, { useEffect } from 'react'
import { useRef } from 'react'

function UseRefhook() {

    const Sampleref = useRef()
    const sampleref1 = useRef()
    const Input1 = useRef()

    useEffect(()=>{
      Input1.current.focus()
    },[])

    const show = ()=>{
        Sampleref.current.style.backgroundColor='green'
        sampleref1.current.style.color='white'
        sampleref1.current.innerText = 'welcome'
        sampleref1.current.innerHTML='<h1>India</h1'

        
    }
  return (
    <div ref={Sampleref}>
        <h1 ref={sampleref1}>
            hello
        </h1>
        <button onClick={show}>click</button>
        <input ref={Input1}  type="text" placeholder='name' />
        <input type="text" placeholder='age' />
        <input type="text" placeholder='domain' />
        <input type="text" placeholder='address' />
        <input type="text" placeholder='state' />
    </div>
  )
}

export default UseRefhook