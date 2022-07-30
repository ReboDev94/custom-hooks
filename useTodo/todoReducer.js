export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[ADD]':
            return [...initialState, action.payload]
        case '[REMOVE]':
            return [...initialState].filter(todo => todo.id !== action.payload.id)
        case '[TOOGLE]':
            return [...initialState].map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

        default:
            throw new Error('Esta accion no es valida')
    }
}