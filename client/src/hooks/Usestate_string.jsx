import React from 'react'
import { useState } from 'react'

const Usestate_string = () => {
    const [name,setName] = useState("Rajesh")

    const updatename = () =>{
        setName("SITAMS")
    }
  return (
    <div>
      <h1>Hello,{name}</h1>
      <button onClick={updatename}>Channge name</button>
    </div>
  )
}

export default Usestate_string
