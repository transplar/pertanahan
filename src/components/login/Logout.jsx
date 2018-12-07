import React from 'react'
import { Redirect } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import { baseAPIURL } from '../../utils/config'

class Logout extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount = () => {
    const url = `${baseAPIURL}/users/logout`
    fetch(url, {
      credentials: 'include'
    }).then(() => {
        this.setState({redirect: true})
      })
      .catch(() => {
        this.setState({redirect: true})
      })
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return <LinearProgress />
  }
}

export default Logout
