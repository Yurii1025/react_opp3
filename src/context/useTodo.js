import { useContext } from "react";
import { TodoContext } from "./TodoContext";

//The custom hook encapsulates work with Context and ensures that it is only used within Provider.

export function useTodos () {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error (
            "useTodos must be used within TodoProvider"
        );
    }

    return context;
}