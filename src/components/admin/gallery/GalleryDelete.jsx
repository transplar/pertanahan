import React from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
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
  thumbnail: {
    maxHeight: 200,
    maxWidth: 200,
  }
})

class GalleryDelete extends React.Component {
  deleteItem = () => {
    const { item, close, reload } = this.props
    const url = `${baseAPIURL}/gallery/${item.id}`
    fetch(url, {
      credentials: 'include',
      method: 'DELETE',
      body: JSON.stringify(item)
    }).then(response => response.json())
      .then(() => {
        close()
        reload()
      })
      .catch(error => console.log(error))
  }

  render () {
    const { classes, open, close, item } = this.props
    return(
      <Modal open={open} onClose={close}>
        <div className={classes.paper}>
          <Typography>
            Yakin ingin menghapus?
          </Typography>
          <Typography>
            <img src={item.url} alt='' className={classes.thumbnail} />
          </Typography>
          <Typography>
            <Button color='secondary' onClick={this.deleteItem}>Delete</Button>
            <Button onClick={close}>Cancel</Button>
          </Typography>
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(GalleryDelete)
