import React, { useEffect,useState } from 'react'


function UseEffect (){
    const[count,setCount]= useState(0)
    useEffect(()=>{
        console.log('UseEffect')
    },[])
console.log('hello render')
  return (
    <>
    <h1>Use Effect{count}</h1>
     <button onClick={()=>setCount(count+1)}>UpdateCounter</button>
    </>
  )
}

export default UseEffect