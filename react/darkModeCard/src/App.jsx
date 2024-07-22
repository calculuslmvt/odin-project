import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggler from './components/themeToggler'
import Card from './components/card'
import { ThemeContextProvider, useTheme } from './components/context/themeContext'

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = ()=> {
    setThemeMode("dark");
  }
  const lightTheme = ()=> {
    setThemeMode("light"); 
  }


  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);



  return (
    <>
        <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeToggler/>
                  </div>

                  <div className="w-full max-w-sm mx-auto ">
                      <Card/>
                  </div>
              </div>
          </div> 
        </ThemeContextProvider>
      
    </>
  )
}

export default App
