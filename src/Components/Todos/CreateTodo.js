import React, {useState, useContext} from 'react'
import TodoContext from '../../Context/Todo/todoContext'
import nextId from 'react-id-generator'
import DatePicker from 'react-datepicker'
import Alert from '../Layout/Alert'
import AlertContext from '../../Context/Alert/alertContext'

import M from "materialize-css/dist/js/materialize.min.js";
import '../../css/style.css'

require('react-datepicker/dist/react-datepicker.css')

const CreateTodo = () => {

  const todoContext = useContext(TodoContext)
  const alertContext = useContext(AlertContext)

  const [project, setProject] = useState(' ')
  const [priority, setPriority] = useState(' ')
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

  // Submit the form and passes the info to the state
  const onSubmit = (e) => {
    e.preventDefault();
    
    let isDescriptionOk = true;
    let isDueOk = true;
    
    if(description === ' '){
      alertContext.setAlert('Please enter a description', 'light')
      isDescriptionOk = false;
    }
    if (due != null) {
      if (due.getFullYear() < creationDate.getFullYear()) {
        alertContext.setAlert("Time machines doesn't exist! Please enter a valid due date", 'light')
        isDueOk = false;
      }
      else if(due.getMonth() < creationDate.getMonth()){
        alertContext.setAlert("Time machines doesn't exist! Please enter a valid due date", 'light')
        isDueOk = false;
      }
      else if (due.getDate() < creationDate.getDate()) {
        alertContext.setAlert("Time machines doesn't exist! Please enter a valid due date", 'light')
        isDueOk = false;
      }
    }
    if(isDescriptionOk && isDueOk){
      let id = nextId(); 

      const todoItem =  {
        project: project,
        priority: priority,
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
  }

  // Resets the state
  const clearState = () => {
    setProject(' ')
    setPriority(' ')
    setCreationDate(new Date())
    setDescription(' ')
    setDue(null)
  }

  return (
    <div className='card padding-top-sm margin-top-sm'>
      <div className='row'>
        <form onSubmit={onSubmit}>
          <Alert />
          {/* First Row */}
          <div className='row'>
            {/* Radio buttons */}
                <div className="col m6 s12 row">
                  <label htmlFor="priorityContainer">Priority:</label>
                  <div className="flex-container-spc-evnly" id='priorityContainer'>
                    <label htmlFor="radioHigh">
                      <input type="radio" name="priority" id="radioHigh" value='high'/>
                      <span>High</span>
                    </label>
                    <label htmlFor="radioMedium">
                      <input type="radio" name="priority" id="radioMedium" value='medium'/>
                      <span>Medium</span>
                    </label>
                    <label htmlFor="radioLow">
                      <input type="radio" name="priority" id="radioLow" value='low'/>
                      <span>Low</span>
                    </label>
                  </div>
                </div>
            <div className='input-field col m6 s12'>
              <input type='text' name='project' id='project' value={project} onChange={onChange}></input>
              <label htmlFor='project'>Project Tag: </label>
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
              <button className="btn-large waves-effect valign-wrapper center-align btn-full-width black" type="submit" name="action" value='Add ToDo'>Add ToDo
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default CreateTodo
