import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class NewsEditor extends React.Component {
  state = {
    form: []
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      form: {...this.state.form, [name]: value}
    })
  }

  handleSubmit = event => {
    // TODO change RESTfull api endpoint
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.form)
    })
    event.preventDefault()
  }

  render () {
    return(
      <form
        onSubmit={this.handleSubmit}
        autoComplete='off'
        style={{maxWidth: '800px'}}
        >
        <TextField
          fullWidth
          required
          onChange={this.handleInputChange}
          name='title'
          label='Judul Berita'
          />
        <TextField
          required
          fullWidth
          multiline
          rows={15}
          onChange={this.handleInputChange}
          name='content'
          label='Isi Berita'
          />
        <Button type='submit' variant='outlined'>Simpan</Button>
      </form>
    )
  }
}

export default NewsEditor
