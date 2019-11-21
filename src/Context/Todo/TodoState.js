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
    const initialState = {
        todoList: []
    }

    const [state, dispatch] = useReducer(TodoReducer, initialState)

    // Add Todo
    const addTodo = (todoItem) => {
        dispatch({
            type: ADD_TODO,
            payload: todoItem
        })
    }

    // Delete Todo
    const deleteTodo = (id) => {
        let index = state.todoList.findIndex((o)=>{
            return o.id === id
        })
        if (index !== -1){
            state.todoList.splice(index, 1)
        }
        console.log(index)
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
    }

    return <TodoContext.Provider value={{
        todos: state.todoList,
        addTodo,
        deleteTodo
    }}>
        {props.children}
    </TodoContext.Provider>
}

export default TodoState
