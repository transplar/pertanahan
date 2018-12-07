import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../utils/config'
import imageSource from '../../images/logo.png'

const styles = theme => ({
  paper: {
    maxWidth: '800px',
    padding: '2rem',
    margin: '1.5rem auto',
  },
  form: {
    maxWidth: '300px',
    margin: '0 auto',
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
      <Paper className={classes.paper}>
        <Typography align='center'>
          <img src={imageSource} alt='Logo Jawa Barat' height='124' />
          <h1>Sistem Informasi Pertanahan</h1>
          <p>Dinas Perumahan Dan Permukiman Provinsi Jawa Barat</p>
        </Typography>
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
          <Typography align='right'>
            <Button type='submit' variant='contained' color='primary'>Login</Button>
          </Typography>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Login)
