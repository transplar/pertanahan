import React from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

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
            <Button color='secondary'>Delete</Button>
            <Button onClick={close}>Cancel</Button>
          </Typography>
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(GalleryDelete)
