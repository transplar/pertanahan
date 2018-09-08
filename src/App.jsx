import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from './components/layout/Homepage'
import LoginPage from './components/layout/LoginPage'
import BeritaDetail from './components/layout/BeritaDetail'
import './style.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Homepage} />
          <Route path='/:auth(signin|signup)' component={LoginPage} />
          <Route path='/berita/:id(\d+)' component={BeritaDetail} />
        </div>
      </Router>
    )
  }
}

export default App
