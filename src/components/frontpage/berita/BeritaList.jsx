import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  root: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grow: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

class BeritaList extends React.Component {
  state = {
    berita: {},
    error: false,
  }

  componentDidMount () {
    const url = `${baseAPIURL}/news`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({berita: json})
      })
      .catch(error => this.setState({error: error.toString()}))
  }

  render () {
    const { classes } = this.props
    const { berita, error } = this.state
    const dateOptions = {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
      year: 'numeric'
    }

    if (error) {
      return <Typography
        color='error'
        align='center'
        variant='title'
        >
        {error}
      </Typography>
    }

    if (!berita.items) {
      return <Typography
        align='center'
        component='div'
        >
        <CircularProgress />
      </Typography>
    }

    if (berita.items.length === 0) {
      return <Typography
        className={classes.grow}
        variant='title'
        align='center'
        color='error'
        >
        Tidak ada berita yang bisa ditampilkan
      </Typography>
    }

    const list = berita.items.map(berita => <Grid item sm={12} key={berita.id}>
        <Paper className={classes.grow}>
          <Typography variant='title' color='textSecondary'>
            <Link to={'/berita/' + berita.id}>{berita.title}</Link>
          </Typography>
          <small>{(new Date(berita.lastUpdate)).toLocaleDateString('id-ID', dateOptions)}</small>
          <Typography component='div'>
            {berita.content}
          </Typography>
          <Typography align='right'>
            <Button component={Link} to={`/berita/${berita.id}`}>Selengkapnya ...</Button>
          </Typography>
        </Paper>
      </Grid>
    )

    return (
      <Grid container spacing={8} className={classes.root}>
        {list}
      </Grid>
    )
  }
}

export default withStyles(styles)(BeritaList)
