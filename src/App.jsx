import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer'
import NavbarApp from './components/NavbarApp'
import Homepage from './components/contents/Homepage'
import { HashRouter as Router } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <NavbarApp />
          <Homepage />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
