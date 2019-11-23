import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Components/Layout/Navbar'
import CreateTodo from './Components/Todos/CreateTodo'
import TodosList from './Components/Todos/TodosList'

import TodoState from './Context/Todo/TodoState'

const App = () => {
  return (
    <TodoState>
      <Router>
        <div className="App">
            <Navbar title='ToDo App' icon='fas fa-calendar-check'/>
            <CreateTodo />
            <TodosList />
        </div>
      </Router>
    </TodoState>
  );
}

export default App;
