import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { drawerWidth } from './AdminDrawer'

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

class AdminAppBar extends React.Component {
  state = {
    title: 'Admin Panel',
  }

  changeTitle = title => {
    this.setState({
      title: title
    })
  }

  render() {
    const { classes } = this.props
    const defaultToolbar = (
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='Open drawer'
          onClick={this.props.handleDrawerToggle}
          className={classes.menuButton}
          >
          <MenuIcon />
        </IconButton>
        <Typography variant='title' color='inherit' noWrap>
          {this.state.title}
        </Typography>
      </Toolbar>
    )

    return (
      <AppBar position='fixed' className={classes.appBar}>
        {this.props.toolbar ? this.props.toolbar : defaultToolbar}
      </AppBar>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AdminAppBar)
