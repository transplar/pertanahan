import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
  },
})

class Document extends React.Component {
  state = {
    documents: [],
    message: '',
    error: false
  }

  componentDidMount () {
    this.reload()
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
    const { message } = this.state
    return(
      <div className={classes.root}>
        <Typography variant='headline' color='error'>
          {message}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Document)
