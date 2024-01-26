import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [strLength, setStrLength] = useState(10);

  let passwordRef = useRef(null);
  const copyToClipboard = useCallback(()=> {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,999);
      window.navigator.clipboard.writeText(password);
  }, [password]); 

  const generatePassword = useCallback(()=> {
    let passwordString = "";
    let _string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(characterAllowed) _string+="!@#$%^&*()_+{}|";
    if(numberAllowed) _string+="1234567890";



    for (let index = 1; index <= strLength; index++) {

      let i = Math.floor(Math.random()*(_string.length -1));
      passwordString +=_string[i];
    }
    console.log(strLength);
    setPassword(passwordString); 

  }, [strLength, numberAllowed, characterAllowed, setPassword]); 

  useEffect(() => generatePassword(), [numberAllowed, characterAllowed, strLength, generatePassword]); 
 
  return (
    <>  

      <div className="grid grid-flow-row gap-4">
        <div class="flex w-full items-center space-x-2 ">
            <input
              class="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder={"password"}
              value={password}
            />
            <button
              type="button"
              onClick={copyToClipboard}
              class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Copy 
            </button>
          </div>
          
              
          <div class="flex w-full items-center space-x-2 ">
          Length
            <label for="basic-range-slider-usage" class="sr-only text-white">  </label>

            <input type="range" class="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
            [&::-webkit-slider-thumb]:w-2.5
            [&::-webkit-slider-thumb]:h-2.5
            [&::-webkit-slider-thumb]:-mt-0.5
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:ease-in-out
            [&::-webkit-slider-thumb]:dark:bg-slate-700

            [&::-moz-range-thumb]:w-2.5
            [&::-moz-range-thumb]:h-2.5
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-4
            [&::-moz-range-thumb]:border-blue-600
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:transition-all
            [&::-moz-range-thumb]:duration-150
            [&::-moz-range-thumb]:ease-in-out

            [&::-webkit-slider-runnable-track]:w-full
            [&::-webkit-slider-runnable-track]:h-2
            [&::-webkit-slider-runnable-track]:bg-gray-100
            [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:dark:bg-gray-700

            [&::-moz-range-track]:w-full
            [&::-moz-range-track]:h-2
            [&::-moz-range-track]:bg-gray-100
            [&::-moz-range-track]:rounded-full" 
            id="basic-range-slider-usage"
            
            min={0}
            max={16} 
            value={strLength}
            onChange={(event)=>{
              return setStrLength(event.target.value)}}
            />
          <div>
            length: {strLength}
          </div>
        </div>


        <div className="flex gap-2">
          <div>
            <input type="checkbox" value={numberAllowed} onChange={(event)=>{
              
              console.log(event.target); 
              return setNumberAllowed((prev)=>(!prev));
            }}/>
          </div>
          numberAllowed : {numberAllowed}
        </div>
        <div className="flex gap-2">
          <div>
            <input type="checkbox" value={characterAllowed} 
            onChange={(event)=> (setCharacterAllowed(!characterAllowed))} />
          </div>
          characterAllowed
        </div>
      </div> 

    </>
  )
}

export default App
