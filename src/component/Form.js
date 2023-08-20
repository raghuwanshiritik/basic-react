import React, { useState } from 'react'

function Form() {
    const[name,setname] = useState()
    const[email,setemail] = useState()
    const[password,setpassword] = useState()
    const[confirmpassword,setconfirmpassword] = useState()
    function getData(e){
        // alert('hello')
        e.preventDefault()
        console.log(name,email,password,confirmpassword )
    }
  return (
   <>
   <div className='container'>
    <div className='col-md-4'>
        <form onSubmit={getData}>
        <div className='md-3'>
            <label>Name:</label>
            <input onChange={(e)=>setname(e.target.value)} type='text' placeholder='name' className='form-control'></input>
        </div>
        <div className='md-3'>
            <label>Email:</label>
            <input onChange={(e)=>setemail(e.target.value)} type='text' placeholder='email' className='form-control'></input>
        </div>
        <div className='md-3'>
            <label>Password:</label>
            <input onChange={(e)=>setpassword(e.target.value)} type='text' placeholder='password' className='form-control'></input>
        </div>
        <div className='md-3'>
            <label>Confirmpassword:</label>
            <input onChange={(e)=>setconfirmpassword(e.target.value)} type='text' placeholder='confirmpassword' className='form-control'></input>
        </div>
        <button className='text-center btn btn-primary'>Submit</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Form