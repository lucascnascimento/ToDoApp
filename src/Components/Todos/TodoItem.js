import React  from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo}) => {
    console.log('todo', todo)
    
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

    return (
        <div>
            {console.log('context', context)}
            {console.log('creationDate', creationDate)}
            {/* <span>{completionDate}</span>
            <span>{creationDate}</span> */}
            <span>{description}</span>
            <span>{project}</span>
            <span>{context}</span>
            {/* <span>{due}</span> */}
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem

//! O campo priority não está escapando os caracteres ()
//! Não consigo renderizar os objetos de datas
//! Criar um método global que permita editar a data pois tanto createTodo quando TodoItem precisam de modificar esse campo e salvar no formato yyyy/mm/dd
//! Remover a validação de texto no CreateTodo, os caracteres serão renderizados em TodoItem