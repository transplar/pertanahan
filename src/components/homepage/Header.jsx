import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  titleBig: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  titleSmall: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
})

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { classes } = this.props
    return (
      <AppBar>
        <Toolbar>
          <Typography color='inherit' variant='title' className={classes.titleBig}>
            Sistem Informasi Manajemen Pertanahan - DISPERKIM JABAR
          </Typography>
          <Typography color='inherit' variant='title' className={classes.titleSmall}>
            Simantan Jabar
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header)
