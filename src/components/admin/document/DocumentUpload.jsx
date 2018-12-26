import React from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
})

class DocumentUpload extends React.Component {
  handleFileUpload = event => {
    event.target.value = null
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render () {
    const { classes } = this.props
    return(
      <Paper className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth name='filename' label='Nama File' />
          <TextField fullWidth name='document_type' label='Jenis Dokumen' />
          <TextField fullWidth name='url' label='Url' readOnly />
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
