import { useState } from "react";
import { useTodos } from "../context/useTodo";
import styles from "./AddTodo.module.css"

function AddTodo () {
    // Local state is used only for input.
    // Global todo state is stored in Context.
    const [text, setText] = useState("");
    const { addTodo } = useTodos();

    const handleAdd = () => {
        // trim() — removes spaces from the beginning and end of a string.
        const trimmed = text.trim();
        // If the string is empty (""), the function stops.
        if (!trimmed) return;

        // addTodo we get from the context.
        addTodo(trimmed);
        // After adding, we clear the input and make the input field empty.
        setText("")
    };

    return (
        <div className={styles.todo_container}>
            <h2 className={styles.todo_header}>TodoList</h2>
            <input className={styles.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className={styles.todo_btn}
                onClick={handleAdd}
                disabled={!text.trim()}
            >
                Add
            </button>
        </div>
    );
}

export default AddTodo;