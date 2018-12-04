import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

class NewsEditor extends React.Component {
  state = {
    message: ''
  }

  handleSubmit = event => {
    const data = {
      title: event.target.title.value,
      content: event.target.content.value
    }

    fetch(`${baseAPIURL}/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(body => {
        this.setState({message: body.message})
        setTimeout(this.props.backToList, 5000)
      })
    event.preventDefault()
  }

  render () {
    const { classes } = this.props

    if (this.state.message) {
      return (
        <div>
          <Typography variant='title' paragraph align='center'>
            {this.state.message}
          </Typography>
          <Typography variant='title' paragraph align='center'>
            <Button
              onClick={this.props.backToList}
              variant='contained'
              color='primary'
              >
              Kembali
            </Button>
          </Typography>
        </div>
      )
    }

    return(
      <form
        onSubmit={this.handleSubmit}
        autoComplete='off'
        style={{maxWidth: '800px'}}
        >
        <TextField
          fullWidth
          required
          name='title'
          label='Judul Berita'
          />
        <TextField
          required
          fullWidth
          multiline
          rows={15}
          name='content'
          label='Isi Berita'
          />
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
            onClick={this.props.backToList}
            variant='contained'
            color='secondary'
            >
            Batal
          </Button>
        </Typography>
      </form>
    )
  }
}

export default withStyles(styles)(NewsEditor)
