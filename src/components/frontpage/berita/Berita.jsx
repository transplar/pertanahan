import React from 'react'
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { baseAPIURL } from '../../../utils/config'

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
      return (
        <div key={berita.id}>
          <Typography variant='title' color='textSecondary'>
            <Link to={'/berita/' + berita.id}>{berita.title}</Link>
          </Typography>
          <small>{berita.lastUpdate.toLocaleString()}</small>
          <Typography paragraph>
            {berita.content}
          </Typography>
          <Typography align='right'>
            <Link to={'/berita/' + index} className='float-right mr-5'>Selengkapnya ...</Link>
          </Typography>
        </div>
      )
    })

    return (
      <Grid container spacing={8}>
        {beritaComponent}
      </Grid>
    )
  }
}

export default Berita
