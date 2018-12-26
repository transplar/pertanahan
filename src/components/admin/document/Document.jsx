import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
})

class Document extends React.Component {
  render () {
    const { classes } = this.props
    return(
      <div className={classes.root}>
        Document
      </div>
    )
  }
}

export default withStyles(styles)(Document)
