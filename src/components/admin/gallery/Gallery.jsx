import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 340,
  },
  fullwidth: {
    width: '100%',
  },
  media: {
    height: 140,
  },
})

class Gallery extends React.Component {
  state = {
    gallery: [],
    error: ''
  }

  componentDidMount() {
    const url = `${baseAPIURL}/gallery`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ gallery: json.items }))
      .catch(error => this.setState({ error: error.toString() }))
  }

  render() {
    const { gallery, error } = this.state
    const { classes } = this.props
    return <Grid container spacing={8}>
      <Grid item sm={12}>
        <Button variant='outlined' color='primary'>Unggah Foto</Button>
        {error ? <Typography color='error' variant='headline'>{error}</Typography> : ''}
      </Grid>
      {gallery.map(item => {
        return <Grid item md={3} key={item.id}>
          <Card>
            <CardActionArea className={classes.fullwidth}>
              <CardMedia image={item.url} title={item.caption} className={classes.media} />
              <CardContent>
                <Typography>
                  {item.caption.substr(0, 25)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                <Edit />
                Edit
              </Button>
              <Button size='small' color='secondary'>
                <Delete />
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      })}
    </Grid>
  }
}

export default withStyles(styles)(Gallery)
