import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBar from './components/colorBar'
import ChangeColor from './components/changeColor'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <ColorBar/> 
    </>
  )
}

export default App
