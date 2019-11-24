import React, {useState, useContext} from 'react'
import TodoContext from '../../Context/Todo/todoContext'
import nextId from 'react-id-generator'
import DatePicker from 'react-datepicker'

import M from "materialize-css/dist/js/materialize.min.js";
import '../../css/style.css'

require('react-datepicker/dist/react-datepicker.css')

const CreateTodo = () => {

  const todoContext = useContext(TodoContext)

  const [project, setProject] = useState(' ')
  const [priority, setPriority] = useState(' ')
  const [context, setContext] = useState(' ')
  const [creationDate, setCreationDate] = useState(new Date())
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
        setDescription(e.target.value)
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
      project: project,
      priority: priority,
      context: context,
      creationDate: creationDate,
      completionDate: null,
      description: description,
      due: due,
      isComplete: false,
      id: id,
    }

    todoContext.addTodo(todoItem)
    clearState()    
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
    <div className='card padding-top-sm margin-top-sm'>
      <div className='row'>
        <form onSubmit={onSubmit}>
          {/* First Row */}
          <div className='row'>
            <div className='input-field col s4'>
              <input type='text' name='priority' id='priority' value={priority} onChange={onChange}></input>
              <label htmlFor='priority'>Priority: </label>
            </div>
            <div className='input-field col s4'>
              <input type='text' name='project' id='project' value={project} onChange={onChange}></input>
              <label htmlFor='project'>Project Tag: </label>
            </div>
            <div className='input-field col s4'>
              <input type='text' name='context' id='context' value={context}onChange={onChange}></input>
              <label htmlFor='context'>Context Tag: </label>
            </div>
          </div>
          {/* Second Row */}
          <div className='row'>
            <div className='input-field col s12'>
              <input type='text' name='description' id='description' value={description} onChange={onChange}></input>
              <label htmlFor='description'>Description: </label>
            </div>
          </div>
          {/* Third Row */}
          <div className='row'>
            <div className='col m4 s6'>
              <label>Creation date: </label>
              <DatePicker selected={creationDate} value={creationDate} onChange={date => setCreationDate(date)} dateFormat="yyyy/MM/dd"/>
            </div>
            <div className='col m4 s6'>
              <label>Due: </label>
              <DatePicker selected={due} value={due} onChange={date => setDue(date)} dateFormat="yyyy/MM/dd"/>
            </div>
            <div className='col m4 s12'>
              <button class="btn-large waves-effect valign-wrapper center-align btn-full-width" type="submit" name="action" value='Add ToDo'>Add ToDo
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default CreateTodo
