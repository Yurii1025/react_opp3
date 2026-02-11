import { useContext } from "react";
import { TodoContext } from "./TodoContext";

//GPT said that - A custom hook encapsulates work with Context and ensures that it is used only within the Provider.🙂

export function useTodos () {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error (
            "useTodos must be used within TodoProvider"
        );
    }

    return context;
}