import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import HomepageHeader from './HomepageHeader'
import HomepageMenu from './HomepageMenu'
import bg from './assets/bg_body.jpg'
import './styles.scss'

const styles = theme => ({
  background: {
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
  grow: {
    flexGrow: 1,
  },
  hexgrid: {
    maxWidth: '1000px',
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
})

class Homepage extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.background}>
        <CssBaseline />
        <HomepageHeader />
        <HomepageMenu />
      </div>
    )
  }
}

export default withStyles(styles)(Homepage)
