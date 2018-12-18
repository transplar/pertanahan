import React from 'react'
import ReactMarkdown from 'react-markdown'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    maxWidth: '1200px',
    margin: '0 auto',
  },
})

class Kontak extends React.Component {
  state = {
    contact: ''
  }

  componentDidMount () {
    const url = `${baseAPIURL}/config/contact`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({contact: json.config.content}))
      .catch(error => this.setState({contact: error.toString()}))
    this.props.changeTitle('Informasi Kontak')
  }

  render () {
    const { contact } = this.state
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <ReactMarkdown source={contact} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Kontak)
