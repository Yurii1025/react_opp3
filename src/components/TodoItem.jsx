import { useTodos } from "../context/useTodo";

function TodoItem ({ todo }) {
    const { toggleTodo, removeTodo } = useTodos();

    if (!todo) return null;

    return (
        <li>
            <input 
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

            <button onClick={() => removeTodo(todo.id)}>
                x
            </button>
        </li>
    );
}

export default TodoItem;