import React from 'react'
import { useState } from 'react';

function UseState() {
   
    const [count,setCount] = useState(0);
  return (
    <>
    <p>you clicked {count} time</p>
    <button onClick={()=>setCount(count+1)}>Clickme</button>
    </>
  )
}

export default UseState