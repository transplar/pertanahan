import React from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
  },
  marginButton: {
    margin: theme.spacing.unit,
  },
})

class SettingForm extends React.Component {
  state = {
    name: '',
    content: '',
    error: '',
    message: ''
  }

  componentDidMount () {
    this.setState({name: this.props.name})
    const url = `${baseAPIURL}/config/${this.props.name}`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({content: json.config.content}))
      .catch(error => this.setState({error: error.toString()}))
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    const data = {
      name: event.target.name.value,
      content: event.target.content.value
    }

    const url = `${baseAPIURL}/config`
    fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => this.setState({message: json.message}))
    event.preventDefault()
  }

  render () {
    const { classes } = this.props
    const { name, content, message } = this.state

    return (
      <Paper className={classes.root}>
        <form autoComplete='off' onSubmit={this.handleSubmit}>
          <TextField
            name='content'
            fullWidth multiline rows={15}
            value={content}
            onChange={this.handleInputChange}
          />
          <input type='hidden' name='name' value={name} />
          <Typography variant='title'>{message}</Typography>
          <Button type='submit' variant='outlined' color='primary'
            className={classes.marginButton}>
            Simpan
          </Button>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(SettingForm)
