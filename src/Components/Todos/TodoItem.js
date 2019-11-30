import React, {useState, useContext}  from 'react'
import PropTypes from 'prop-types'
import TodoContext from '../../Context/Todo/todoContext'


const TodoItem = ({todo}) => {
	const todoContext = useContext(TodoContext)

	const [todoItemColor, setTodoItemColor] = useState({
		priorityField: " ",
		dueField: "grey lighten-4",
		creationField: "grey lighten-5",
		descriptionField: "grey lighten-4",
		completionField: "grey lighten-5",
		buttonsField: "grey lighten-3",
	})
    
	let {
		completionDate, 
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
		completionDate = new Date()
		console.log(completionDate)
		todoContext.toggleTodo({
			id: id,
			isComplete: isComplete,
			completionDate: completionDate
		})
	}

	return (
		<div className='card'>
			<div className="row">
				<div className="col m1">
					<label >Priority</label>
					<p className='center-align'>{`(${priority})`}</p>
				</div>
				<div className={`col m2 ${todoItemColor.dueField} full-height`}>
					<label htmlFor="">Due</label>
					<p className=''>{renderDate(due)}</p>
				</div>
				<div className={`col m2 ${todoItemColor.creationField}`}>
					<label htmlFor="">Creation</label>
					<p className=''>{renderDate(creationDate) + ' '}</p>
				</div>
				<div className={`col m5 ${todoItemColor.descriptionField}`}>
					<label htmlFor="">Description</label>
					<p className=''>{`@${project} ${description}`}</p>
				</div>
				<div className={`col m2 ${todoItemColor.completionField}`}>
					<label htmlFor="">Completion</label>
					<p className=''>{renderDate(completionDate) + ' '}</p>
				</div>
			</div>
			<div className={`row ${todoItemColor.buttonsField}`}>
				{!isComplete ? 
					<div>
						<a onClick={toggleCompletion} className='col m1 center push-m10 green-text cursor-pointer'>
							<i className="small material-icons">done</i>
						</a>
						<a onClick={deleteItem} className='col m1 center push-m10 red-text cursor-pointer'>
							<i className="small material-icons">delete</i>
						</a>
					</div> :
					<a onClick={deleteItem} className='col m1 center push-m11 red-text cursor-pointer'>
						<i className="small material-icons">delete</i>
					</a>
				}
			</div>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
}

export default TodoItem
