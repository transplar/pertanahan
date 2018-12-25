import React from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
  },
})

class GalleryUpload extends React.Component {
  render () {
    const { classes, close } = this.props
    return (
      <Paper className={classes.root}>
        <form
          onSubmit={this.handleSubmit}
          autoComplete='off'
          style={{ maxWidth: '800px' }}
        >
          <img src='http://placekitten.com/1000/1000' alt='' className={classes.image} />
          <TextField
            required
            fullWidth
            multiline
            rows={5}
            name='content'
            label='Deskripsi'
            InputLabelProps={{ shrink: true }}
          />
          <Typography>
            <input type='file' name='image' accept='image/*' onChange={this.handleImageUpload} />
          </Typography>
          <Typography align='right'>
            <Button
              className={classes.button}
              type='submit'
              variant='outlined'
            >
              Simpan
          </Button>
            <Button
              className={classes.button}
              onClick={close}
              variant='contained'
              color='secondary'
            >
              Batal
          </Button>
          </Typography>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(GalleryUpload)
