import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Components/Layout/Navbar'
import CreateTodo from './Components/Todos/CreateTodo'

const App = () => {
  return (
    <Router>
      <div className="App">
          <Navbar title='ToDo App' icon='fas fa-calendar-check'/>
          <CreateTodo />
      </div>
    </Router>
  );
}

export default App;
