import React, {useContext} from 'react'
import TodoItem from './TodoItem'
import TodoContext from '../../Context/Todo/todoContext'

const TodosList = () => {
  const todoContext = useContext(TodoContext)

  const {todos} = todoContext

  return (
    <div>
      {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />
      }).reverse()}
    </div>
  )
}

export default TodosList
