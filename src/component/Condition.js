import React, { useState } from 'react'

function Condition() {
    const[login,setlogin] = useState()
  return (
   <>
{
    login == 1?
    <h1>Welcome User One</h1>
    :login == 2?<h1>Welcome User Two</h1>
     :<h1>Welcome User Three</h1>
}
   </>
  )
}

export default Condition