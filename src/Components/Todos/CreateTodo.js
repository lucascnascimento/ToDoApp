import React, {useState, useContext} from 'react'
import TodoContext from '../../Context/Todo/todoContext'
import nextId from 'react-id-generator'

const CreateTodo = () => {

  const todoContext = useContext(TodoContext)

  const [project, setProject] = useState(' ')
  const [priority, setPriority] = useState(' ')
  const [context, setContext] = useState(' ')
  const [creationDate, setCreationDate] = useState(' ')
  const [completionDate, setCompletionDate] = useState(null)
  const [description, setDescription] = useState(' ')
  const [due, setDue] = useState(null)

  // Handles form state update
  const onChange = (e) => {
    const [project, priority] = e.target.name;
    e.preventDefault();
    switch (e.target.name) {
      case 'project':
        setProject(e.target.value)
        break;
      case 'priority':
        setPriority(e.target.value)
        break;
      case 'context':
        setContext(e.target.value)
        break;
      case 'creationDate':
        setCreationDate(e.target.value)
        break;
      case 'description':
        setDescription(e.target.value)
        break;
      case 'due':
        setDue(e.target.value)
        break;
      default:
        break;
    }
  }

  // TODO: clear input field after submit, validate input conditions
  const onSubmit = (e) => {
    e.preventDefault();
    
    let id = nextId(); 
    let date = new Date();

    if (creationDate === ' ') { //!First onSubmit does not complete the date when this is not set
      console.log("primeira iteração: ", date)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      setCreationDate(`${year}-${month}-${day}`)
      e.target.reset()
    }

    const todoItem =  {
      project: project,
      priority: priority,
      context: context,
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

  const clearState = () => {
    setProject(' ')
    setPriority(' ')
    setContext(' ')
    setCreationDate(0)
    setDescription(' ')
    setDue(' ')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label>Priority: </label>
            <input type='text' name='priority' placeholder='Priority' onChange={onChange} required></input>
          </div>
          <div>
            <label>Creation date: </label>
            <input type='date' name='creationDate' placeholder='Creation Date' onChange={onChange}></input>
          </div>
          <div>
            <label>Due: </label>
            <input type='date' name='due' placeholder='Due' onChange={onChange}></input>
          </div>
        </div>
        <div>
          <div>
            <label>Project Tag: </label>
            <input type='text' name='project' placeholder='Project' onChange={onChange} required></input>
          </div>
          <div>
            <label>Context Tag: </label>
            <input type='text' name='context' placeholder='Context' onChange={onChange}></input>
          </div>
          <div>
            <label>Description: </label>
            <input type='text' name='description' placeholder='Description' onChange={onChange}></input>
          </div>
          <input type='submit' value='Add ToDo'></input>
        </div>
      </form>
    </div>
  )
}

export default CreateTodo
