import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Map from './maps/Map'
import NotFound from '../NotFound'

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
        component = <Map changeTitle={this.props.changeTitle} />
        break
      default:
        component = <NotFound />
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
