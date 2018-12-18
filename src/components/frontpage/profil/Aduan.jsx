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

class Aduan extends React.Component {
  state = {
    aduan: ''
  }

  componentDidMount () {
    const url = `${baseAPIURL}/config/aduan`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({aduan: json.config.content}))
      .catch(error => this.setState({aduan: error.toString()}))
    this.props.changeTitle('Informasi Pengaduan')
  }

  render () {
    const { aduan } = this.state
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <ReactMarkdown source={aduan} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Aduan)
