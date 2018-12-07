import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Admin from './components/admin/Admin'
import BeritaDetail from './components/layout/BeritaDetail'
import Contact from './components/layout/Contact'
import DownloadPage from './components/layout/DownloadPage'
import Frontpage from './components/frontpage/Frontpage'
import Gallery from './components/layout/Gallery'
import Homepage from './components/layout/Homepage'
import InformationPage from './components/layout/InformationPage'
import Login from './components/login/Login'
import Logout from './components/login/Logout'
import Maps from './components/layout/Maps'
import NotFound from './components/layout/NotFound'
import Pengaduan from './components/layout/Pengaduan'
import Profile from './components/layout/Profile'
import './style.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/frontpage?' component={Frontpage} />
            <Route path='/profil' component={Profile} />
            <Route path='/berita/:id(\d+)' component={BeritaDetail} />
            <Route path='/download' component={DownloadPage} />
            <Route path='/pelayanan' component={InformationPage} />
            <Route path='/pengaduan' component={Pengaduan} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/maps' component={Maps} />
            <Route path='/contact' component={Contact} />
            <Route path='/admin/:page?' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
