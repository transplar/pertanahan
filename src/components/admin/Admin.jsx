import React from 'react'
import { Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'
import AdminDrawer, { drawerWidth } from './AdminDrawer'
import { baseAPIURL } from '../../utils/config'
import AdminAppBar from './AdminAppBar'
import AdminMainContent from './AdminMainContent'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
})

class Admin extends React.Component {
  state = {
    title: 'Admin Panel',
    mobileOpen: false,
    isLoggedin: false,
    redirect: false,
    toolbar: '',
  }

  componentDidMount = () => {
    fetch(`${baseAPIURL}/users/me`, {
      credentials: 'include'
    }).then(response => {
      if (response.status === 200) {
        this.setState({
          isLoggedin: true
        })
      } else {
        this.setState({
          redirect: true
        })
      }
    })
  }

  changeTitle = title => {
    this.setState({
      title: title
    })
  }

  changeToolbar = toolbar => {
    this.setState({toolbar: toolbar})
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render() {
    const { classes, theme } = this.props
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to='/login' />
    }

    if (!this.state.isLoggedin) {
      return <LinearProgress />
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AdminAppBar toolbar={this.state.toolbar} handleDrawerToggle={this.handleDrawerToggle} />
        <AdminDrawer
          theme={theme}
          mobileOpen={this.state.mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
          changeTitle={this.changeTitle}
          />
        <AdminMainContent
          changeToolbar={this.changeToolbar}
          component={this.props.match.params.page}
          />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Admin)
