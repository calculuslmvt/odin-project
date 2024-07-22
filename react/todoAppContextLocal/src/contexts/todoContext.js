import { createContext, useContext } from "react";

const todoContext = createContext(
    {
        todoList: [
            {
                todoId: 1,
                todoText: "",
                isCompleted: false,
            }
        ],
        addTodo: (todoList)=>{},
        deleteTodo: (todoId)=>{},
        updateTodo: (todoId, todoContext)=>{},
        toggleComplete: (todoId)=>{},
    }
);


export const useTodoContext = () => {
    return useContext(todoContext); 
};


export const TodoContextProvider = todoContext.Provider; 