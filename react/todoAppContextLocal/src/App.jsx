import { useEffect, useId, useState } from 'react'
import TodoForm from './components/todoForm';
import TodoItem from './components/todoItems';
import { TodoContextProvider } from './contexts/todoContext';

function App() {

  const [todoArray, setTodoArray] = useState([]);

  const addTodo = (todoList)=> {
    console.log("adding" + todoList); 
      setTodoArray((prevValue) => [todoList, ...prevValue]); 
  };
  const deleteTodo = (todoId)=> {
    setTodoArray((prevValue) => prevValue.filter((value)=> (value.todoId !== todoId))); 
  };
  const updateTodo = (todoId, todoText) => {

console.log("update")

    setTodoArray((prevValue) =>  
      prevValue.map((value)=>
          value.todoId===todoId?{...value, todoText:todoText}:value));
  };
  const toggleComplete = (todoId) => {

    //console.log("triggered" + todoId); 
    
    setTodoArray((prevValue) =>  
      prevValue.map((value)=>
          value.todoId===todoId?{...value, isCompleted:!value.isCompleted}:value));
  }; 

useEffect(() => {
  const todoData = JSON.parse(localStorage.getItem("todoData"));

  if(todoData && todoData.length > 0)
    setTodoArray(todoData); 
},[]);

// setting data in local storage 
useEffect(() => {
  localStorage.setItem("todoData",  JSON.stringify(todoArray));
}, [todoArray]); 




useEffect(()=> {
  console.log(todoArray); 
},[])

  return (
    <TodoContextProvider value = {{todoArray, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todoArray.map((value) => {
                              console.log(value); 
                          return(
                            <div key={value.todoId}
                            className='w-full'>
                              <TodoItem todo={value}/> 
                            </div>
                          )
                        })}

                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
