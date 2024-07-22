import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList: [{
        todoId: nanoid(),
        todoText: "This Todo uses State Mutater i.e. REDUCERS",
    },]
};


// Ideas : reducers are basically HOW TO MUTATE THE STATE !!!!


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state, action)=> {
            const newTodo = {
                todoId: nanoid(),
                todoText: action.payload
            }
            state.todoList.push(newTodo);
        },
        deleteTodo: (state, action)=> {
            state.todoList = state.todoList.filter((todo)=> todo.todoId !== action.payload);  
        },
    }
});

export const {addTodo, deleteTodo} = todoSlice.actions ;

export default todoSlice.reducer

