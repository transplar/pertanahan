import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import imageLogo from './assets/logo_disperkim.png'

const styles = theme => ({
  imageLogo: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    margin: theme.spacing.unit,
  },
})

class HomepageFooter extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Typography align='center'>
          <img src={imageLogo} alt='' className={classes.imageLogo}/>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(HomepageFooter)
