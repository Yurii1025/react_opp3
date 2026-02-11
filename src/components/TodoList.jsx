import { useTodos } from "../context/useTodo";
import TodoItem from "./TodoItem";
import styles from "./List-Item.module.css"

function TodoList() {
    // TodoList does not manage state, it only reads data from Context.
    const { todos } = useTodos();

    if (todos.length === 0) {
        // Explicit display of empty state.
        return <p>There are no cases at the moment.</p>
    }

    return (
        <ul className={styles.ul_container}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
}

export default TodoList;