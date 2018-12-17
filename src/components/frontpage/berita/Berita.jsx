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

class Berita extends React.Component {
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
    this.props.changeTitle('Berita Pertanahan')
  }

  render () {
    const { berita, error } = this.state
    const { classes } = this.props

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

    const beritaComponent = berita.items.map((berita, index) => {
      const dateOptions = {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
      }

      return (
        <Grid item sm={12} key={berita.id}>
          <Paper className={classes.grow}>
            <Typography variant='title' color='textSecondary'>
              <Link to={'/berita/' + berita.id}>{berita.title}</Link>
            </Typography>
            <small>{(new Date(berita.lastUpdate)).toLocaleDateString('id-ID', dateOptions)}</small>
            <Typography component='div'>
              {berita.content}
            </Typography>
            <Typography align='right'>
              <Button component={Link} to={'/berita/' + index}>Selengkapnya ...</Button>
            </Typography>
          </Paper>
        </Grid>
      )
    })

    return (
      <Grid container spacing={8} className={classes.root}>
        {beritaComponent}
      </Grid>
    )
  }
}

export default withStyles(styles)(Berita)
