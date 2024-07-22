import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/slice/todoSlice";

function Form() {

    const [todoEntry, setTodoEntry] = useState(""); 
    const dispatch = useDispatch();
    const handleAddClick = (e) => {
        e.preventDefault(); 
        dispatch(addTodo(todoEntry)); 
        setTodoEntry("");
    }
    return(
        <form >
            <div className="flex gap-2">
                <div>
                    <input 
                    placeholder="Write Todo..."
                    className=" bg-black/10 px-1 py-2 text-white/80 border-cyan-500  outline-none rounded-sm"
                    type="text" 
                    onChange={(e)=>setTodoEntry(e.target.value)}
                    value={todoEntry}
                    id="formInput" />
                </div>
                <div className=" bg-green-600 p-2 rounded-sm ">
                    <button 
                    id="form"
                    onClick={handleAddClick}
                    >Add</button>
                </div>
            </div>
        </form>
        
    );
}
export default Form; 