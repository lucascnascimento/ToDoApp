import React, {useState, useContext} from 'react'
import TodoContext from '../../Context/Todo/todoContext'

const CreateTodo = () => {

    const todoContext = useContext(TodoContext)

    const [project, setProject] = useState(' ')
    const [priority, setPriority] = useState(' ')
    const [context, setContext] = useState(' ')
    const [creationDate, setCreationDate] = useState(null)
    const [completionDate, setCompletionDate] = useState(null)
    const [description, setDescription] = useState(' ')
    const [due, setDue] = useState(null)
    const [isComplete, setIsComplete] = useState(false)
    const [id, setId] = useState(' ')
    const [isCreateTodoActive, setIsCreateTodoActive] = useState(false)

    // TODO: replace the useState for an object
    const [todo, setTodo] = useState({
        todoObj: {
        project: ' ',
        priority: ' ',
        context: ' ',
        creationDate: null, // date
        completionDate: null, // date
        description: ' ',
        due: null, // date
        isComplete: false,
        id: ' ',
        }
    })


    const onChange = (e) => {
        const [project, priority] = e.target.name;
        e.preventDefault();
        console.log(e.target)
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
            // case 'completionDate':
            //     setCompletionDate(e.target.value)
            //     break;
            case 'description':
                setDescription(e.target.value)
                break;
            case 'due':
                setDue(e.target.value)
                break;
            // case 'isComplete':
            //     setIsComplete(e.target.value)
            //     break;
            default:
                break;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const todoItem =  {
            project: project,
            priority: priority,
            context: context,
            creationDate: null,
            completionDate: null,
            description: description,
            due: null,
            isComplete: false,
            id: ' ',
        }
        console.log(todoItem)
        // todoContext.addTodo(todoItem)
    }

    return (
        <div>
            <button>
                Open new todo
            </button>
            <form onSubmit={onSubmit}>
                <input type='text' name='priority' placeholder='Priority' onChange={onChange} required></input>
                <input type='text' name='creationDate' placeholder='Creation Date' onChange={onChange}></input>
                <input type='text' name='due' placeholder='Due' onChange={onChange}></input>
                <input type='text' name='project' placeholder='Project' onChange={onChange} required></input>
                <input type='text' name='context' placeholder='Context' onChange={onChange}></input>
                <input type='text' name='description' placeholder='Description' onChange={onChange}></input>
                <input type='submit' value='Save'></input>
            </form>
        </div>
    )
}

export default CreateTodo
