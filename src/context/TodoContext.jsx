import { createContext, useState } from "react";

export const TodoContext = createContext(null);

export function TodoProvider ({ children }) {
    const [todos, setTodos] =useState([]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text.trim(),
            done: false,
        };

        setTodos((prev) => [...prev, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                ? {...todo, done: !todo.done}
                : todo
        )
    );
    };

    const removeTodo = (id) => {
        setTodos((prev) => 
            prev.filter((todo) => todo.id !== id)
    );
    };

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, toggleTodo, removeTodo}}     
        >
            {children}
        </TodoContext.Provider>
    )
}