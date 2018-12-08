import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Map from './maps/Map'

const styles = theme => ({
  main: {
    padding: '1em'
  },
  toolbar: theme.mixins.toolbar,
})

class FrontpageMainContent extends React.Component {
  render () {
    const { classes, page } = this.props
    let component

    switch(page) {
      case 'maps':
        component = <Map />
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

export default withStyles(styles)(FrontpageMainContent)
