import React, { useState } from 'react'

function HideshowToggle() {
    const[status,setstatus] = useState(0)
  return (
   <>
   <h1>.....</h1>
   {
    status?<h1>Ritik Raghuwanshi</h1>:null
   }
   <button onClick={()=>setstatus(false)} className='btn btn-primary'>Hide</button>
   <button onClick={()=>setstatus(true)} className='btn btn-info'>Show</button>
   <button onClick={()=>setstatus(!status)} className='btn btn-danger'>Toggle</button>
   </>
  )
}

export default HideshowToggle