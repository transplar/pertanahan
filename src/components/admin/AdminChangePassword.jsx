import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    maxWidth: 320,
    padding: theme.spacing.unit * 2,
  },
  buttonContainer: {
    marginTop: theme.spacing.unit,
  },
})

class AdminChangePassword extends React.Component {
  render () {
    const { classes } = this.props

    return(
      <div className={classes.root}>
        <Typography variant='headline'>
          Ganti Password
        </Typography>
        <form>
          <TextField
            fullWidth
            required
            name='old_password'
            label='Password Lama'
            type='password'
            />
          <TextField
            fullWidth
            required
            name='new_password'
            label='Password Baru'
            type='password'
            />
          <TextField
            fullWidth
            required
            name='new_password_confirm'
            label='Password Baru (Ulangi)'
            type='password'
            />
          <Typography className={classes.buttonContainer} align='center'>
            <Button variant='outlined' color='primary' type='submit'>Simpan</Button>
          </Typography>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(AdminChangePassword)
