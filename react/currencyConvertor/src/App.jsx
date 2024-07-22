import { useState } from 'react'
import ConverterBanner from './converterBanner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=" w-full h-screen flex flex-wrap justify-center items-center bg-black">
      <ConverterBanner/> 
    </div>
    </>
  )
}

export default App
