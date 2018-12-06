import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL, pictshareAPIEndpoint } from '../../../utils/config'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

class NewsEditor extends React.Component {
  state = {
    message: '',
    id: '',
    title: '',
    content: ''
  }

  componentDidMount = () => {
    const newsId = this.props.newsId
    if (newsId) {
      const url = `${baseAPIURL}/news/${newsId}`
      fetch(url, {
        credentials: 'include'
      }).then(response => response.json())
        .then(json => this.setState({
          id: json.id,
          title: json.title,
          content: json.content
        }))
    }
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleImageUpload = event => {
    let formData = new FormData()
    formData.append('postimage', event.target.files[0])
    fetch(pictshareAPIEndpoint, {
      method: 'post',
      body: formData
    })
  }

  handleSubmit = event => {
    const data = {
      id: event.target.id.value,
      title: event.target.title.value,
      content: event.target.content.value
    }

    const method = this.props.mode === 'create' ? 'POST' : 'PATCH'

    fetch(`${baseAPIURL}/news`, {
      method: method,
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
        <input type='hidden' name='id' value={this.state.id} />
        <TextField
          fullWidth
          required
          name='title'
          label='Judul Berita'
          value={this.state.title}
          onChange={this.handleChange}
          InputLabelProps={{shrink: true}}
          />
        <TextField
          required
          fullWidth
          multiline
          rows={15}
          name='content'
          label='Isi Berita'
          value={this.state.content}
          onChange={this.handleChange}
          InputLabelProps={{shrink: true}}
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
