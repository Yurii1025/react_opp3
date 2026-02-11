import { useState } from "react";
import { useTodos } from "../context/useTodo";
import styles from "./AddTodo.module.css"

function AddTodo () {
    const [text, setText] = useState("");
    const { addTodo } = useTodos();

    const handleAdd = () => {
        const trimmed = text.trim();
        if (!trimmed) return;

        addTodo(trimmed);
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