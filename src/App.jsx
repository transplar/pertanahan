import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from './components/layout/Homepage'
import './style.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Homepage} />
        </div>
      </Router>
    )
  }
}

export default App
