import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
  },
  marginZero: {
    margin: 0,
  },
  list: {
    padding: theme.spacing.unit,
  },
})

class Document extends React.Component {
  render () {
    const { classes, documents } = this.props
    return (
      <div className={classes.root}>
        {documents.map(item => (
          <ListItem className={classes.list} key={item.id} >
            <a href={item.url}>{item.filename}</a>
          </ListItem>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Document)
