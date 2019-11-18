import React, {useState, useContext} from 'react'
import TodoContext from '../../Context/Todo/todoContext'
import nextId from 'react-id-generator'
import DatePicker from 'react-datepicker'

require('react-datepicker/dist/react-datepicker.css')

const CreateTodo = () => {

  const todoContext = useContext(TodoContext)

  const [project, setProject] = useState(' ')
  const [priority, setPriority] = useState(' ')
  const [context, setContext] = useState(' ')
  const [creationDate, setCreationDate] = useState(new Date())
  const [completionDate, setCompletionDate] = useState(' ')
  const [description, setDescription] = useState(' ')
  const [due, setDue] = useState(null)

  // Handles form state update
  const onChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'project':
        setProject(e.target.value.trim())
        break;
      case 'priority':
        setPriority(e.target.value.trim())
        break;
      case 'context':
        setContext(e.target.value.trim())
        break;
      case 'description':
        setDescription(e.target.value.trim())
        break;
      case 'due':
        setDue(e.target.value.trim())
        break;
      default:
        break;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    let id = nextId(); 

    const todoItem =  {
      project: `+${project}`,
      priority: `(${priority})`,
      context: `@${context}`,
      creationDate: creationDate,
      completionDate: completionDate,
      description: description,
      due: due,
      isComplete: false,
      id: id,
    }

    todoContext.addTodo(todoItem)
    clearState()    
  }

  // TODO: Turn general date form into yyyy/mm/dd
  const onChangeDate = (e) => {
    console.log(e)
    setCreationDate(e)
  }

  // Resets the state
  const clearState = () => {
    setProject(' ')
    setPriority(' ')
    setContext(' ')
    setCreationDate(new Date())
    setDescription(' ')
    setDue(null)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label>Priority: </label>
            <input type='text' name='priority' value={priority} placeholder='Priority' onChange={onChange} required></input>
          </div>
          <div>
            <label>Creation date: </label>
            <DatePicker selected={creationDate} value={creationDate} onChange={date => setCreationDate(date)} dateFormat="yyyy/MM/dd"/>
          </div>
          <div>
            <label>Due: </label>
            <DatePicker selected={due} value={due} onChange={date => setDue(date)} dateFormat="yyyy/MM/dd"/>
          </div>
        </div>
        <div>
          <div>
            <label>Project Tag: </label>
            <input type='text' name='project' value={project} placeholder='Project' onChange={onChange} required></input>
          </div>
          <div>
            <label>Context Tag: </label>
            <input type='text' name='context' value={context} placeholder='Context' onChange={onChange}></input>
          </div>
          <div>
            <label>Description: </label>
            <input type='text' name='description' value={description} placeholder='Description' onChange={onChange}></input>
          </div>
          <input type='submit' value='Add ToDo'></input>
        </div>
      </form>
    </div>
  )
}

export default CreateTodo
