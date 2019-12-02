import React, {Fragment} from 'react'
import CreateTodo from '../Todos/CreateTodo'
import TodosList from '../Todos/TodosList'

const Home = () => {
  return (
    <div>
      <Fragment>
        <CreateTodo />
        <TodosList />
      </Fragment>
    </div>
  )
}

export default Home
