import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstchild from './components/Firstchild'
import Secondchild from './components/Secondchild'
import Thirdchild from './components/Thirdchild'
import Fourthchild from './components/Fourthchild'
import Fifthchild from './components/Fifthchild'
import Usestate_hook from './hooks/Usestate_hook'
import Day from './hooks/Day'
// import Increment_decrement from './hooks/Increment_decrement'
// import Usestate_example from './components/Usestate_example'
// import UseEffect_Example from './components/UseEffect_Example'
// import Usestate_Example2 from './components/Usestate_Example2'
import Usestate_string from './components/Usestate_string'
import Ternary_operator from './components/Ternary_operator'
import FormEvents from './components/FormEvents'
import Displaydata from './components/Displaydata'
import UserData from './components/userData'
import Comments from './components/Comments'
import Spread_operator from './components/Spread_operator'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './components/Services'
import About_us from './components/About_us'
import Contact_us from './components/Contact_us'
function App() {

  const name = "Rajesh"
  const place = "Bengalore"

  const details = {
    name:"Rajesh",
    place:"Bangalore",
    role:"Lead Software Engineer"
  }


  return (
   <div>
    {/* <Firstchild name = {name} />
    <Secondchild city = {place}/>
    <Thirdchild employee = {details}/>
    <Fourthchild employee = {details}/>
    <Fifthchild/> */}
    {/* <Usestate_hook/> */}
    {/* <Day/> */}
    {/* <Increment_decrement/> */}
    {/* <Usestate_string/> */}
    {/* <Usestate_example/> */}
    {/* <UseEffect_Example/> */}
    {/* <Usestate_Example2/> */}
    {/* <Usestate_string/> */}
    {/* <Ternary_operator/> */}
    {/* <FormEvents/> */}
    {/* <Displaydata/> */}
    {/* <UserData/> */}
    {/* <Comments/> */}
    {/* <Spread_operator/> */}
    <Navbar/>

     <BrowserRouter>
      <Routes>/
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services/>}/>
        <Route path='/aboutus' element={<About_us/>}/>
        <Route path='/contactus' element={<Contact_us/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
