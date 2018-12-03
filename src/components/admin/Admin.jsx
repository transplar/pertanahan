import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import AdminDrawer, { drawerWidth } from './AdminDrawer'
import NewsEditor from './news/NewsEditor'
import { baseAPIURL } from '../../utils/config'

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
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

class Admin extends React.Component {
  state = {
    title: 'Admin Panel',
    mobileOpen: false,
    isLoggedin: false,
  }

  componentDidMount = () => {
    fetch(`${baseAPIURL}/users/me`, {
      credentials: 'include'
    }).then(response => {
      if (response.status === 200) {
        this.setState({
          isLoggedin: true
        })
      }
    })
  }

  changeTitle = title => {
    this.setState({
      title: title
    })
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render() {
    const { classes, theme } = this.props

    const adminComponent = <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' noWrap>
              {this.state.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <AdminDrawer
          theme={theme}
          mobileOpen={this.state.mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
          changeTitle={this.changeTitle}
          />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <NewsEditor />
        </main>
      </div>
    const login = <div>login</div>
    return this.state.isLoggedin ? adminComponent : login
  }
}

export default withStyles(styles, { withTheme: true })(Admin)
