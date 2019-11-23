import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Components/Layout/Navbar'
import CreateTodo from './Components/Todos/CreateTodo'
<<<<<<< HEAD
import TodosList from './Components/Todos/TodosList'
=======
>>>>>>> createTodo

import TodoState from './Context/Todo/TodoState'

const App = () => {
  return (
    <TodoState>
      <Router>
        <div className="App">
            <Navbar title='ToDo App' icon='fas fa-calendar-check'/>
            <CreateTodo />
<<<<<<< HEAD
            <TodosList />
=======
>>>>>>> createTodo
        </div>
      </Router>
    </TodoState>
  );
}

export default App;
