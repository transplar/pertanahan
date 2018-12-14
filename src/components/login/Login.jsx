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
  errorMessage: {
    margin: '2rem',
  },
  form: {
    maxWidth: '300px',
    margin: '0 auto',
  }
})

class Login extends React.Component {
  state = {
    redirect: false,
    error: ''
  }

  componentDidMount = () => {
    fetch(`${baseAPIURL}/users/me`, {
      credentials: 'include'
    }).then(response => {
      if (response.status === 200) {
        this.setState({
          redirect: true
        })
      }
    })
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
      .catch(error => {
        this.setState({error: 'Terjadi kesalahan, silahkan coba lagi atau hubungi admin.'})
      })
    event.preventDefault()
  }

  render () {
    const { classes } = this.props
    const { error, redirect } = this.state
    let errorMessage

    if (redirect) {
      return <Redirect to='/admin' />
    }

    if (error) {
      errorMessage = <Typography 
        className={classes.errorMessage}
        color='error' 
        align='center' 
        variant='button' 
        >
        {error}
      </Typography>
    }

    return(
      <Paper className={classes.paper}>
        <Typography align='center' component='div'>
          <img src={imageSource} alt='Logo Jawa Barat' height='124' />
          <Typography variant='headline'>Sistem Informasi Manajemen Pertanahan</Typography>
          <Typography variant='subheading'>Dinas Perumahan Dan Permukiman Provinsi Jawa Barat</Typography>
        </Typography>
        {errorMessage}
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
