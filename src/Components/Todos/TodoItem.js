import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo}) => {
    
    const [
        id,
        priority, 
        project, 
        context, 
        creationDate, 
        completionDate, 
        description, 
        due
    ] = todo

    return (
        <div>
            <span>{priority}</span>
            <span>{completionDate}</span>
            <span>{creationDate}</span>
            <span>{description}</span>
            <span>{project}</span>
            <span>{context}</span>
            <span>{due}</span>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem
