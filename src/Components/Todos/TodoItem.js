import React, {useState, useContext}  from 'react'
import PropTypes from 'prop-types'
import TodoContext from '../../Context/Todo/todoContext'


const TodoItem = ({todo}) => {
    const todoContext = useContext(TodoContext)
    
    let {
        completionDate, 
        context, 
        creationDate, 
        description, 
        due,
        id,
        isComplete,
        priority, 
        project, 
    } = todo;

    const renderDate = (date) => {
        if (date !== null) {
            let day = date.getDate()
            let month = date.getMonth()
            let year = date.getFullYear()
            return `${year}-${month+1}-${day}`
        }
        else{
            return ' '
        }    
    }

    const deleteItem = () =>{
        todoContext.deleteTodo(id)
    }

    const toggleCompletion = () =>{
        isComplete = !isComplete
        todoContext.toggleTodo({
            todoId: id,
            isComplete: isComplete
        })
    }

    return (
        <div>
            <span>{`(${priority})`}</span>
            <span>{renderDate(completionDate) + ' '}</span>
            <span>{renderDate(creationDate) + ' '}</span>
            <span>{description + ' '}</span>
            <span>{project + ' '}</span>
            <span>{context + ' '}</span>
            <span>{renderDate(due)}</span>
            <span>{isComplete.toString()}</span>
            <button onClick={deleteItem}>Delete</button>
            <button onClick={toggleCompletion}>V</button>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem
