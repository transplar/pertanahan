import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from './layout/Homepage'
import { HashRouter as Router } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Homepage />
        </div>
      </Router>
    )
  }
}

export default App
