import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Components/Layout/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'

import TodoState from './Context/Todo/TodoState'
import AlertState from './Context/Alert/AlertState'

const App = () => {
  return (
    <AlertState>
      <TodoState>
        <Router>
        <Navbar title='TodoApp' icon='event_available'/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
            </Switch>
          </div>
        </Router>
      </TodoState>
    </AlertState>
  );
}

export default App;
