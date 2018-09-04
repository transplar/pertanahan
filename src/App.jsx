import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from './components/layout/Homepage'
import Footer from './components/Footer'
import './style.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Homepage />
        <Footer />
      </div>
    )
  }
}

export default App
