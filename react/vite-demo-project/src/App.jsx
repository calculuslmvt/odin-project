import { useState } from 'react'

function App() {
  let value = 10;
  
  let [counter, setCounter] = useState(value); 

  function increase() {

    // In react same setCounters will be treated as one 
    // so this instead when applying multiple same setCounters
    setCounter((prevCounter) => {
      console.log(prevCounter);
      return prevCounter+1;
    }); 
  }
  function decrease() {
    setCounter(--counter);
  }
  return (
    <div>
      <h1>
        This is webhook example. 
      </h1>
      <div>
        Counter value: {counter} 
      </div>
      <br/>
      <div>
        <button onClick={increase}>Increase value: {counter}</button>
        <button onClick={decrease}>Decrease value: {counter}</button>
      </div>
    </div>
  )
}

export default App
