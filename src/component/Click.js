import React from 'react'

function Click() {
   let  name = 'ritik'
  function hello(a){
    name = a
    alert(name)
  }
  console.log ('hello gwaloor')
  return (
    <>
   <h1>hello {name}</h1>
   <button onClick={hello}>Upadate</button>
   <button onClick={()=>hello('raj')}>Click me</button>
    </>
  )
}

export default Click