import React from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

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
  state = {
    url: '',
    caption: '',
    date: ''
  }

  handleImageUpload = event => {
    const url = `${baseAPIURL}/upload`
    let formData = new FormData()
    formData.append('file', event.target.files[0])
    fetch(url, {
      method: 'post',
      credentials: 'include',
      body: formData
    }).then(response => response.json())
      .then(json => {
        this.setState({url: json.url})
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    const data = {
      url: event.target.url.value,
      caption: event.target.caption.value,
      event_date: event.target.date.value,
    }
    const url = `${baseAPIURL}/gallery`
    fetch(url, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(() => {
        this.props.reload()
        this.props.close()
      })
    event.preventDefault()
  }

  render () {
    const { classes, close } = this.props
    const { url, date, caption } = this.state
    return (
      <Paper className={classes.root}>
        <form
          onSubmit={this.handleSubmit}
          autoComplete='off'
          style={{ maxWidth: '800px' }}
        >
          <img src={url} alt='' className={classes.image} />
          <Input
            required
            fullWidth
            readOnly
            name='url'
            value={url}
          />
          <Input
            fullWidth
            name='date'
            type='date'
            onChange={this.handleInputChange}
            value={date}
          />
          <TextField
            required
            fullWidth
            multiline
            rows={5}
            value={caption}
            onChange={this.handleInputChange}
            name='caption'
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
