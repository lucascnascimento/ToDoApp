import React, {useState, useContext, useEffect}  from 'react'
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

	useEffect (() => {
		if (priority === 'High') {
			setTodoItemColor({...todoItemColor, priorityField:'red'})
		}
		else if (priority === 'Medium'){
			setTodoItemColor({...todoItemColor, priorityField:'yellow'})
		}
		else{
			setTodoItemColor({...todoItemColor, priorityField:'green'})
		}
	}, [todoItemColor.priorityField])
    
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

	// Renders the date in a more user friendly way
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

	// Deletes an item
	const deleteItem = () =>{
		todoContext.deleteTodo(id)
	}

	// Toggles todo completion state
	const toggleCompletion = () =>{
		isComplete = !isComplete
		completionDate = new Date()
		changeColors()
		todoContext.toggleTodo({
			id: id,
			isComplete: isComplete,
			completionDate: completionDate
		})
	}

	// Changes de color of the todo item
	const changeColors = () =>{
		setTodoItemColor({
			dueField: "light-green lighten-4",
			creationField: "light-green lighten-5",
			descriptionField: "light-green lighten-4",
			completionField: "light-green lighten-5",
			buttonsField: "light-green lighten-3",
		})
	}

	return (
		<div className='card'>
			<div className="row">
				<div className={`col m1 ${todoItemColor.priorityField}`}>
					<label >Priority</label>
					<p className='center-align'>{`${priority}`}</p>
				</div>
				<div className={`col m2 ${todoItemColor.dueField}`}>
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
