import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let counter = 15; 
const addValue = ()=>{
  console.log("Value added", Math.random());

}
const subValue = ()=>{
  console.log("Value Decreased", Math.random())
}
  return (
    <>
     <h1>Chai Aur React </h1>
     <h2> Count value: {counter}</h2>

     <button 
     onClick ={addValue}>
      Incresase Value</button>
     <br/>
     <button
      onClick = {subValue}> 
      Decrease Value</button>
    </>
  )
}

export default App
