import { useTodos } from "../context/useTodo";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todos } = useTodos();

    if (todos.length === 0) {
        return <p>Ingen todos ennå</p>
    }

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
}

export default TodoList;