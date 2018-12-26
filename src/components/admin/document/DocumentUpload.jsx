import React from 'react'
import Button from '@material-ui/core/Button'
import FormControlLable from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
})

class DocumentUpload extends React.Component {
  state = {
    url: '',
    document_type: '',
    filename: ''
  }

  handleChange = event => {
    this.setState({document_type: event.target.value})
  }

  handleFileUpload = event => {
    const url = `${baseAPIURL}/upload`
    let formData = new FormData()
    formData.append('file', event.target.files[0])
    fetch(url, {
      method: 'post',
      credentials: 'include',
      body: formData
    }).then(response => response.json())
      .then(json => {
        this.setState({url: json.url, filename: json.file.file.name})
      })
    event.target.value = null
  }

  handleSubmit = event => {
    const data = {
      url: event.target.url.value,
      filename: event.target.filename.value,
      document_type: event.target.document_type.value
    }
    const url = `${baseAPIURL}/document`
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
    event.preventDefault()
  }

  render () {
    const { classes } = this.props
    const { url, document_type, filename } = this.state
    return(
      <Paper className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <FormLabel>Tipe Dokumen</FormLabel>
          <RadioGroup name='document_type' value={document_type} onChange={this.handleChange}>
            <FormControlLable value='laporan' label='Laporan' control={<Radio />} />
            <FormControlLable value='panduan' label='Panduan' control={<Radio />} />
            <FormControlLable value='publikasi' label='Publikasi'  control={<Radio />}/>
          </RadioGroup>
          <TextField fullWidth name='filename' label='Nama File' value={filename} />
          <TextField fullWidth name='url' label='Url' readOnly value={url} />
          <input type='file' onChange={this.handleFileUpload} />
          <Typography>
            <Button type='submit'>Simpan</Button>
          </Typography>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(DocumentUpload)
