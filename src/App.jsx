import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from './components/layout/Homepage'
import './style.css'
import LoginPage from './components/layout/LoginPage';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Homepage} />
          <Route path='/signin' component={LoginPage} />
        </div>
      </Router>
    )
  }
}

export default App
