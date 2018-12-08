import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MainMap from '../MainMap'

const styles = theme => ({
  main: {
    padding: '1em'
  },
  toolbar: theme.mixins.toolbar,
})

class FrontendMainContent extends React.Component {
  render () {
    const { classes, page } = this.props
    let component

    switch(page) {
      case 'maps':
        component = <MainMap />
        break
      default:
        break
    }

    return(
      <div className={classes.main}>
        <div className={classes.toolbar}></div>
        {component}
      </div>
    )
  }
}

export default withStyles(styles)(FrontendMainContent)
