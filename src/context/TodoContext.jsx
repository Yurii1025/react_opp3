import { createContext, useState } from "react";

// Context is used to store the shared todo state and its management functions to avoid props drilling.
export const TodoContext = createContext(null);

export function TodoProvider ({ children }) {
    // The only source of truth for all todos
    const [todos, setTodos] =useState([]);

    // Adds a new task. The logic for creating a todo is here.
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),     // a simple way to generate a unique ID
            text: text.trim(),
            done: false,        // a new task is always not completed
        };
        // We use a functional update to ensure that we are up to date.
        setTodos((prev) => [...prev, newTodo]);
    };
    // Toggles the done state of a specific task.
    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                ? {...todo, done: !todo.done}
                : todo
        )
    );
    };
    // Deletes a task by id.
    const removeTodo = (id) => {
        setTodos((prev) => 
            prev.filter((todo) => todo.id !== id)
    );
    };

    return (
        // In value we pass only the public API, hiding the internal implementation of Context.
        <TodoContext.Provider
            value={{ todos, addTodo, toggleTodo, removeTodo}}     
        >
            {children}
        </TodoContext.Provider>
    )
}