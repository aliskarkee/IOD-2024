import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-400 text-black p-7  rounded-xl mb-4'>
      Tailwind Test</h1>
      <Card userName= "Men's wear"/>
      <Card userName="Women's wear" description='Minimum order of $75 for free shipping in Sydney'/>
    </>
  )
}

export default App
