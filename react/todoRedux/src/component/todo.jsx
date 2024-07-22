import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/slice/todoSlice";

function Todo({todoText, todoId}) {
    console.log(todoText); 
    const todoList = useSelector((state)=> state.todoList);
    const despatch = useDispatch();  
    const handleDelete = ()=> {
        console.log(`deleting ${todoId}`); 
        despatch(deleteTodo(todoId)); 
        console.log(todoList); 
    }
    const handleEdit = () => {
        const form = document.getElementById("formInput");
        form.value = todoText;
    }

    return (
        <div className="flex gap-1 text-slate-200  flex-grow">
            <input 
            className=" bg-slate-500  outline-none rounded-sm  flex-grow"
            readOnly = {true}
            type="text"
            value={todoText}/>
            <button 
            onClick={handleEdit}
            className=" bg-slate-500 px-2 rounded-sm text-green-200">
                Edit
            </button>
            <button 
            onClick={handleDelete}
            className="bg-slate-500 px-2 rounded-sm text-green-300">
                Delete
            </button>
        </div>
    );
}
export default Todo;
