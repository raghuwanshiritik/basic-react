import React, { useState } from 'react'
// import Home from './component/Home'
import Header from './component/layouts/Header'
// import Footer from './component/layouts/Footer'
import './App.css'
import './component/css/style.css'
import ComponentDidMound from './component/lifecyclemethod/ComponentDidMound'
import UseState from './component/hooks/UseState'
import UseEffect from './component/hooks/UseEffect'
import UseEffect1 from './component/hooks/UseEffect1'
import UseEffectApi from './component/hooks/UseEffectApi'
import NextedList from './component/hooks/NextedList'
import Certificate from './component/hooks/Certificate'

// import {  Route, Routes } from 'react-router-dom'
// import About from './component/About'
// import Team from './component/Team'
// import Contact from './component/Contact'
// import PageNoteFound from './component/PageNoteFound'
// import Click from './component/Click'
// import State from './component/State'
// import StateOne from './component/StateOne'
// import Props from './component/Props'
// import HideshowToggle from './component/HideshowToggle'
// import Condition from './component/Condition'
// import Form from './component/Form'
// import User from './component/User'
// import Cstate from './component/Cstate'
// import Constructor from './component/lifecyclemethod/Constructor'
// import Render1 from './component/lifecyclemethod/Render1.js'





function App() {
  // const[data,setdata] = useState('Ritik Raghuwanshi')
  // let name = 'ritik'
  return (
    <>
    <Header/>
    {/* <Click/> */}
    {/* <State/> */}
    {/* <StateOne/> */}
    {/* <Props name={data}/>
    <button onClick={()=>setdata('ram')}>clickme</button> */}
    {/* <HideshowToggle/> */}
    {/* <Condition/> */}
 {/* <Form/> */}
 {/* <User n = {name}/> */}
{/* <Cstate/> */}
{/* <Constructor/> */}
{/* <Render1/> */}
{/* <ComponentDidMound/> */}
{/* <UseState/> */}
{/* <UseEffect/> */}
{/* <UseEffect1/> */}
{/* <UseEffectApi/> */}
{/* <NextedList/> */}
<Certificate/>
    {/* <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/team' element={<Team/>} />
   <Route path='/contact' element={<Contact/>} /> */}
   {/* page not found is always write in down */}
   {/* <Route path='*' element={<PageNoteFound/>} />
   </Routes> */}
    {/* <Footer/> */}
    </>
  )
}

export default App