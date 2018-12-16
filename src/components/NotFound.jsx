import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import imageSource from '../images/logo.png'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5,
  },
  imageLogo: {
    maxHeight: '72px',
    margin: theme.spacing.unit * 2,
  },
})

class NotFound extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <Typography align='center'>
          <img src={imageSource} alt='Logo Jawa Barat' className={classes.imageLogo} />
          <h1>Halaman Tidak Ditemukan</h1>
          <footer>
            &copy; 2018, <Link to='/'>Kembali ke Beranda</Link>
          </footer>
        </Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(NotFound)
