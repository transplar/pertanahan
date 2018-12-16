import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import imageLogo from './assets/logo_text.png'

const styles = theme => ({
  marginToolbar: {
    marginTop: '1rem',
  },
  imageLogo: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    margin: '1rem 0 3rem 0',
  },
  titleBig: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  titleSmall: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
})

class HomepageHeader extends Component {
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
      <div>
        <AppBar className={classes.titleSmall}>
          <Toolbar>
            <Typography color='inherit' variant='title'>
              Simantan Jabar
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar}></div>
        <div className={classes.marginToolbar}></div>
        <Typography align='center'>
          <img src={imageLogo} alt='' className={classes.imageLogo}/>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(HomepageHeader)
