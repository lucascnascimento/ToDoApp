import React, {useState, useContext}  from 'react'
import PropTypes from 'prop-types'
import TodoContext from '../../Context/Todo/todoContext'


const TodoItem = ({todo}) => {
    const todoContext = useContext(TodoContext)
    
    /*
    TODO: create the method to delete the item
    TODO: create the method to handle item rendering (edit mode)
     */
    
    const {
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

    return (
        <div>
            <span>{`(${priority})`}</span>
            <span>{renderDate(completionDate) + ' '}</span>
            <span>{renderDate(creationDate) + ' '}</span>
            <span>{description + ' '}</span>
            <span>{project + ' '}</span>
            <span>{context + ' '}</span>
            <span>{renderDate(due)}</span>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem

//! Criar um método global que permita editar a data pois tanto createTodo quando TodoItem precisam de modificar esse campo e salvar no formato yyyy/mm/dd