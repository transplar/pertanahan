import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer'
import NavbarApp from './components/NavbarApp'
import Homepage from './components/contents/Homepage'
import Peta from './components/contents/Peta'
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <NavbarApp />
          <Route exact path='/' component={Homepage} />
          <Route path='/peta' component={Peta} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
