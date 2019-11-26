import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Components/Layout/Navbar'
import CreateTodo from './Components/Todos/CreateTodo'
import TodosList from './Components/Todos/TodosList'

import TodoState from './Context/Todo/TodoState'
import AlertState from './Context/Alert/AlertState'

const App = () => {
  return (
    <AlertState>
      <TodoState>
        <Router>
        <Navbar title='TodoApp' icon='event_available'/>
          <div className="container">
            <CreateTodo />
            <TodosList />
          </div>
        </Router>
      </TodoState>
    </AlertState>
  );
}

export default App;
