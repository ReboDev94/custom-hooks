import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initializer = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], initializer)

    useEffect(() => {
        const todosAux = JSON.stringify(todos);
        localStorage.setItem('todos', todosAux);
    }, [todos])


    const handleNewTodo = (todo) => {
        dispatch({ type: '[ADD]', payload: todo });
    }

    const handleRemoveTodo = (todo) => {
        dispatch({ type: '[REMOVE]', payload: todo });
    }

    const handleToogleTodo = (id) => {
        console.log(id);
        dispatch({ type: '[TOOGLE]', payload: id });
    }

    const terminados = todos.filter(item => item.done)
    const pendientes = todos.filter(item => !item.done)


    return {
        todos,
        terminados,
        pendientes,
        handleNewTodo,
        handleRemoveTodo,
        handleToogleTodo
    }
}
