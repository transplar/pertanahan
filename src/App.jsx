import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './components/admin/Admin'
import Frontpage from './components/frontpage/Frontpage'
import Homepage from './components/homepage/Homepage'
import Login from './components/login/Login'
import Logout from './components/login/Logout'
import WelcomeModal from './components/WelcomeModal'
import './style.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/admin/:page?' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/:frontpage' component={Frontpage} />
          </Switch>
          <WelcomeModal />
        </div>
      </Router>
    )
  }
}

export default App
