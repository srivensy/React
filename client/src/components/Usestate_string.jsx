import React, { useEffect } from 'react'
import { useState } from 'react'

const Usestate_string = () => {
    // const [name,setName] = useState("chittor")
    const [name,setName] = useState("Tirupati")

    console.log(name)

    useEffect(()=>{
       if(name === "chittor"){
        setName("Hyderabad")
    }else
    {
        setName("Chennai")
    }
    },[])

  return (
    <div>
      <h1>City name is : {name}</h1>
    </div>
  )
}

export default Usestate_string
