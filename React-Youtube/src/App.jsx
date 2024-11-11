import { useState } from "react"


function App() {
  const[color, setColor] = useState("Olive")

  return (
   <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color, height: "100vh" }}
    >  
<div className="fixed bottom-0 inset-x-0 flex justify-center px-2">


      <div className="fixed bottom-0 justify-between">
        <button onClick= {() => setColor("red")} 
        className="px-4 py-1 rounded-md text-black shadow-lg" style={{backgroundColor : "red"}}
        > Red</button>
        <button onClick= {() => setColor("skyblue")} 
                className="px-4 py-1 rounded-md text-black shadow-lg" style={{backgroundColor : "skyblue"}}> Sky Blue</button>

        <button onClick= {() => setColor("blue")} 
         className="px-4 py-1 rounded-md text-black shadow-lg" style={{backgroundColor : "blue"}}> Blue</button>

        <button onClick= {() => setColor("yellow")} 
         className="px-4 py-1 rounded-md text-black shadow-lg" style={{backgroundColor : "yellow"}}> Yellow</button>

        <button onClick= {() => setColor("green")} 
        className="px-4 py-1 rounded-md text-black shadow-lg" style={{backgroundColor : "green"}}> Green</button>

      </div>
    </div>
   </div>
  )
}

export default App
