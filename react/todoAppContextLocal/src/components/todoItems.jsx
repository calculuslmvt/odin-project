import { useCallback, useState } from "react";
import { useTodoContext } from "../contexts";

function TodoItem({todo}) {

    const {toggleComplete, updateTodo, deleteTodo} = useTodoContext(); 
    const [isTodoEditable, setIsTodoEditable] = useState(false); 
    const [todoMsg, setTodoMsg] = useState(todo.todoText); 


    const divDisable = ()=> {
         setIsTodoEditable(false)
    }
    
    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.todoId)
      }

    //toggleComplete(12); 
    
    
    return(
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >   
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isCompleted}
                onChange={() => {toggleComplete(todo.todoId)}}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.isCompleted ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.isCompleted) return;

                    if (isTodoEditable) {
                        updateTodo(todo.todoId, todoMsg); 
                        divDisable();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.isCompleted}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.todoId)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem; 