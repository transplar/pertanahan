import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
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
  paper: {
    position: 'absolute',
    minWidth: theme.spacing.unit * 25,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  },
})

class Document extends React.Component {
  state = {
    modalOpen: false,
    toBedeleted: null
  }

  closeModal = () => {
    this.setState({modalOpen: false, toBedeleted: null})
  }

  deleteItem = () => {
    const item = this.state.toBedeleted
    const url = `${baseAPIURL}/document/${item.id}`
    fetch(url, {
      method: 'DELETE',
      credentials: 'include'
    }).then(response => response.json())
      .then(() => {
        this.closeModal()
        this.props.reload()
      })
      .catch(error => console.log(error))
  }

  openModal = (item) => {
    this.setState({modalOpen: true, toBedeleted: item})
  }

  render () {
    const { classes, documents } = this.props
    const { modalOpen, toBedeleted } = this.state
    return (
      <div className={classes.root}>
        {documents.map(item => (
          <ListItem className={classes.list} key={item.id} >
            <IconButton color='secondary' onClick={() => this.openModal(item)}>
              <Delete />
            </IconButton>
            <a href={item.url}>{item.filename}</a>
          </ListItem>
        ))}
        {!toBedeleted ? '' :
          <Modal open={modalOpen} onClose={this.closeModal}>
            <div className={classes.paper}>
              <Typography>
                Yakin ingin menghapus?
              </Typography>
              <Typography variant='title'>
                {toBedeleted.filename}
              </Typography>
              <Typography>
                <Button color='secondary' onClick={this.deleteItem}>Delete</Button>
                <Button onClick={this.closeModal}>Cancel</Button>
              </Typography>
            </div>
          </Modal>
        }
      </div>
    )
  }
}

export default withStyles(styles)(Document)
