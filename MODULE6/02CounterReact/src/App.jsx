import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
// let counter = 15; 
const addValue = ()=>{
  if (counter <20)
  setCount(counter+1)
}

const subValue = ()=>{
  if(counter >0 )
  setCount(counter-1)

};
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

      <p id = "Footer">Footer: Sorry the maximum increase value is 20 and minimum Decrease calue is 0</p>
    </>

  )

}
export default App
