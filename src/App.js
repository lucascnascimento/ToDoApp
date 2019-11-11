import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Components/Layout/Navbar'

const App = () => {
  return (
    <Router>
      <div className="App">
          <Navbar title='ToDo App' icon='fas fa-calendar-check'/>
      </div>
    </Router>

  );
}

export default App;
