import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import DocumentUpload from './DocumentUpload'
import { baseAPIURL } from '../../../utils/config'
import DocumentList from './DocumentList'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
  },
})

class Document extends React.Component {
  state = {
    documents: [],
    message: '',
    error: false,
    uploadForm: false
  }

  componentDidMount () {
    this.reload()
  }

  closeForm = () => {
    this.setState({uploadForm: false})
  }

  uploadDocument = () => {
    this.setState({uploadForm: true})
  }

  reload = () => {
    const url = `${baseAPIURL}/document`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.status !== 'OK') {
          this.setState({
            message: json.message
          })
        } else {
          this.setState({documents: json.items, error: false, message: ''})
        }
      })
      .catch(error => this.setState({message: error.toString()}))
  }

  render () {
    const { classes } = this.props
    const { documents, message, uploadForm } = this.state
    return(
      <div className={classes.root}>
        <Typography variant='headline' color='error'>
          {message}
        </Typography>
        <Typography>
          <Button variant='outlined' color='primary' onClick={this.uploadDocument}>Upload Dokumen</Button>
        </Typography>
        {uploadForm ? <DocumentUpload close={this.closeForm} reload={this.reload} /> : ''}
        <DocumentList documents={documents} reload={this.reload} />
      </div>
    )
  }
}

export default withStyles(styles)(Document)
