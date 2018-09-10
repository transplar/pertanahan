import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import BeritaDetail from './components/layout/BeritaDetail'
import DownloadPage from './components/layout/DownloadPage'
import Homepage from './components/layout/Homepage'
import InformationPage from './components/layout/InformationPage'
import LoginPage from './components/layout/LoginPage'
import Maps from './components/layout/Maps'
import './style.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Homepage} />
          <Route path='/:auth(signin|signup)' component={LoginPage} />
          <Route path='/berita/:id(\d+)' component={BeritaDetail} />
          <Route path='/download' component={DownloadPage} />
          <Route path='/information' component={InformationPage} />
          <Route path='/maps' component={Maps} />
        </div>
      </Router>
    )
  }
}

export default App
