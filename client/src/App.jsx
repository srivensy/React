import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstchild from './components/Firstchild'
import Secondchild from './components/Secondchild'
import Thirdchild from './components/Thirdchild'
import Fourthchild from './components/Fourthchild'
import Fifthchild from './components/Fifthchild'

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
    <Firstchild name = {name} />
    <Secondchild city = {place}/>
    <Thirdchild employee = {details}/>
    <Fourthchild employee = {details}/>
    <Fifthchild/>
   </div>
  )
}

export default App
