import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from './components/layout/Homepage'
import Footer from './components/Footer'
import Header from './components/Header'
import './style.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Homepage />
        <Footer />
      </div>
    )
  }
}

export default App
