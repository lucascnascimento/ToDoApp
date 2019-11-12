import React, {useState, useContext} from 'react'

const CreateTodo = () => {

    const [project, setProject] = useState(' ')
    const [priority, setPriority] = useState(' ')
    const [context, setContext] = useState(' ')
    const [creationDate, setCreationDate] = useState(null)
    const [completionDate, setCompletionDate] = useState(null)
    const [description, setDescription] = useState(' ')
    const [due, setDue] = useState(null)
    const [isComplete, setIsComplete] = useState(false)
    const [id, setId] = useState(' ')


    const onChange = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <button>
                Open new todo
            </button>
            <form>
                <input type='text' name='project' placeholder='Context' ></input>
            </form>
        </div>
    )
}

export default CreateTodo
