import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Form, Todo} from './component/index'
import { store } from './app/store'
import { Provider, useSelector } from 'react-redux'

function App() {
  const todoList = useSelector((state) => state.todoList);
  //console.log(todoList); 
  // const todoDivList = todoList.map((todo) => {
  //   console.log(todo); 
  //   return(
  //     <Todo todo={123}/>
  //   );
  // })
  return (
      <div className="bg-slate-800  min-h-screen text-white py-8">
        <div className="flex gap-4 flex-col justify-center">
              <h1 className=" flex justify-center">
                Add your Todos
              </h1>

          <div className="flex justify-center min-w-full text-black">
            <Form/>
          </div>
          
          <div className="flex justify-center flex-col">
            {
              todoList.map((todo) => {
                return(
                  <div key={todo.todoId}  flex-grow >
                    <Todo todoText ={todo.todoText} todoId={todo.todoId}/>
                  </div>
                );
              })
            }
          </div> 
        </div>
      </div>
     
  )
}

export default App
