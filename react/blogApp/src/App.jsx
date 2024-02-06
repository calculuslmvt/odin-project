import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/conf'

function App() {

  const envVar = conf; 
  console.log(conf);

  return (
    <>
      hello to my blogging website. 
    </>
  )
}

export default App
