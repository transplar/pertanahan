import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { baseAPIURL } from '../../../utils/config';

class NewsEditor extends React.Component {
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
        <Button type='submit' variant='outlined'>Simpan</Button>
      </form>
    )
  }
}

export default NewsEditor
