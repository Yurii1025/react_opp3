import { useTodos } from "../context/useTodo";
import styles from "./List-Item.module.css"

function TodoItem ({ todo }) {
    const { toggleTodo, removeTodo } = useTodos();

    if (!todo) return null;

    return (
        <li className={styles.li_container}>
            <div className={styles.chk_span}>
                <input className={styles.chk}
                    type="checkbox"
                    checked={Boolean(todo.done)}
                    onChange={() => toggleTodo(todo.id)}
                />

                <span
                    style={{
                    textDecoration: todo.done
                    ? "line-through"
                    : "none",
                    }}
                >
                    {todo.text}
                </span>
            </div>
            

            <button className={styles.del_btn} onClick={() => removeTodo(todo.id)}>
                x
            </button>
        </li>
    );
}

export default TodoItem;