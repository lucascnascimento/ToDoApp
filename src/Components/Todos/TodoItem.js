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
            id: id,
            isComplete: isComplete
        })
		}
		
    return (
			<div className='card'>
				<div className="row">
					<div className="col m1">
						<label >Priority</label>
						<p className='center-align'>{`(${priority})`}</p>
					</div>
					<div className="col m2">
						<label htmlFor="">Due</label>
						<p className=''>{renderDate(due)}</p>
					</div>
					<div className="col m2">
						<label htmlFor="">Creation</label>
						<p className=''>{renderDate(creationDate) + ' '}</p>
					</div>
					<div className="col m5">
						<label htmlFor="">Description</label>
						<p className=''>{`@${project} ${description}`}</p>
					</div>
					<div className="col m2">
						<label htmlFor="">Completion</label>
						<p className=''>{renderDate(completionDate) + ' '}</p>
					</div>
				</div>
				<div className="row">
						<a onClick={toggleCompletion} className='col m1 center push-m10 green-text'>
							<i className="small material-icons">done</i>
						</a>
						<a onClick={deleteItem} className='col m1 center push-m10 red-text'>
							<i className="small material-icons">delete</i>
						</a>
				</div>
			</div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem
