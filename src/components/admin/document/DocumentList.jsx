import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import Delete from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

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
  deleteItem = (item) => {
    const url = `${baseAPIURL}/document/${item.id}`
    fetch(url, {
      method: 'DELETE',
      credentials: 'include'
    }).then(response => response.json())
      .then(() =>  this.props.reload())
      .catch(error => console.log(error))
  }

  render () {
    const { classes, documents } = this.props
    return (
      <div className={classes.root}>
        {documents.map(item => (
          <ListItem className={classes.list} key={item.id} >
            <IconButton color='secondary' onClick={() => this.deleteItem(item)}>
              <Delete />
            </IconButton>
            <a href={item.url}>{item.filename}</a>
          </ListItem>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Document)
