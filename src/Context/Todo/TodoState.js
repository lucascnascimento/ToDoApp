import React, {useReducer} from 'react'
import TodoContext from './todoContext'
import TodoReducer from './todoReducer'
import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    EDIT_TODO
} from '../types'

const TodoState = props => {
    const initialState = [{}]

    const [state, dispatch] = useReducer(TodoReducer, initialState)

    // Add Todo
    const addTodo = (todoItem) => {
        dispatch({
            type: ADD_TODO,
            payload: todoItem
        })
    }

    return <TodoContext.Provider>
        [{}]
    </TodoContext.Provider>
}

export default TodoState
