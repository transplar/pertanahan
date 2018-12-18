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

class Profil extends React.Component {
  state = {
    profil: ''
  }

  componentDidMount () {
    const url = `${baseAPIURL}/config/profile`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({profil: json.config.content}))
      .catch(error => this.setState({profil: error.toString()}))
    this.props.changeTitle('Profil')
  }

  render () {
    const { profil } = this.state
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <ReactMarkdown source={profil} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Profil)
