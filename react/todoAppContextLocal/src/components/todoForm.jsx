import { useId, useState } from "react";
import { useTodoContext } from "../contexts";

function TodoForm() {

    const [todoInput, setTodoInput] = useState(""); 
    const {addTodo} = useTodoContext();

    const handleAddToDo = (e)=> {
        e.preventDefault();

        if(todoInput)
        {   

            console.log("adding value "+ todoInput); 
            addTodo({
                todoId: Math.floor(Math.random(100)*100),
                todoText: todoInput,
                isCompleted: false,
            });

            setTodoInput(""); 
        }
        
    }

    return(
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoInput}
                onChange={(e)=> setTodoInput(e.target.value)}
            />
            <button 
            onClick={handleAddToDo}
            type="submit" 
            className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm; 