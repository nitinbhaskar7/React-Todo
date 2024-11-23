import  { useContext, createContext } from "react";

const TodoContext = createContext({
    todos: [{
        id: 231332,
        content: "Make Chai",
        isCompleted: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id , todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { }
})


export const TodoProvider = TodoContext.Provider;

export default function useTodos() {
    return useContext(TodoContext);
}
