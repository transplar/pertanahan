import React from 'react'
import Button from '@material-ui/core/Button'
import Map from '@material-ui/icons/Map'
import Memory from '@material-ui/icons/Memory'
import { withStyles } from '@material-ui/core/styles'

const hostname = `${document.location.protocol}//${document.location.hostname}`

const styles = theme => ({
  marginButton: {
    margin: '1rem',
  }
})

class Dashboard extends React.Component {
  render () {
    const { classes } = this.props
    return(
      <div>
        <Button
          className={classes.marginButton}
          href={`${hostname}:9090/geoserver`}
          component='a'
          color='primary'
          variant='outlined'
          >
          <Map />
          Geoserver
        </Button>
        <Button
          component='a'
          href={`${hostname}:8083/`}
          variant='outlined'
          color='primary'
          >
          <Memory />
          Database
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Dashboard)
