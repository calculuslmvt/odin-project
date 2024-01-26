import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const nikeUrl = "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400";
  const adidasUrl = "https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&w=400";

  return (
    <>
      <Card brandName="Nike" imgUrl={nikeUrl}/>
      <Card brandName="adidas" imgUrl={adidasUrl}/>
    </>
  )
}

export default App
