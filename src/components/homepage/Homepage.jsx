import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import HomepageHeader from './HomepageHeader'
import HomepageMenu from './HomepageMenu'
import './styles.scss'

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  hexgrid: {
    maxWidth: '1000px',
  },
  marginToolbar: {
    marginTop: '1rem',
  },
  menuButton: {
    marginRight: 20,
  },
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
  toolbar: theme.mixins.toolbar,
})

class Homepage extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <CssBaseline />
        <HomepageHeader />
        <div className={classes.toolbar}></div>
        <div className={classes.marginToolbar}></div>
        <HomepageMenu />
      </div>
    )
  }
}

export default withStyles(styles)(Homepage)
