import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'
import Disqus from 'disqus-react'
import { baseAPIURL } from '../../../utils/config';

const styles = theme => ({
  root: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
})

class BeritaDetail extends React.Component {
  state = {
    berita: false,
    error: false,
  }

  componentDidMount () {
    const url = `${baseAPIURL}/news/${this.props.match.params.id}`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ berita: json }))
  }

  render () {
    const { classes } = this.props
    const { berita, error } = this.state

    if (!berita) {
      return <Typography align='center' component='div'><CircularProgress /></Typography>
    }

    if (error) {
      return <Typography align='center' color='error' variant='title'>{error}</Typography>
    }

    const dateOptions = {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
      year: 'numeric'
    }
    const disqusShortname = 'pertanahan'
    const disqusConfig = {
      url: window.location.href,
      identifier: this.props.match.url,
      title: berita.title
    }

    return (
      <Grid className={classes.root}>
        <Grid>
          <Paper className={classes.paper}>
            <Typography variant='title' color='textSecondary'>
              {berita.title}
            </Typography>
            <small>{(new Date(berita.lastUpdate)).toLocaleDateString('id-ID', dateOptions)}</small>
            <Typography component='div'>
              <ReactMarkdown source={berita.content} />
            </Typography>
          <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(BeritaDetail)
