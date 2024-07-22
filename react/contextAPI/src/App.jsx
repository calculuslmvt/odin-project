import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/userContextProvider'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
      <Header/>
      <Login/>
      <Profile/>  
    </UserContextProvider>
    </>
  )
}

export default App
