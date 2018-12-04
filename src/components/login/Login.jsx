import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../utils/config'

const styles = theme => ({
  form: {
    maxWidth: '300px',
    margin: '0 auto',
    padding: '2rem',
  }
})

class Login extends React.Component {
  state = {
    redirect: false
  }

  handleSubmit = event => {
    const payload = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    const url = `${baseAPIURL}/users/login`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then(() => this.setState({redirect: true}))
    event.preventDefault()
  }

  render () {
    const { classes } = this.props
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to='/admin' />
    }

    return(
      <Paper>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            required
            name='username'
            label='Username'
            />
          <TextField
            fullWidth
            required
            name='password'
            label='Password'
            type='password'
            />
          <Button type='submit' variant='contained' color='primary'>Login</Button>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Login)
