import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { baseAPIURL } from '../../../utils/config';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    maxWidth: '1200px',
    margin: '0 auto',
  },
})

class Galeri extends React.Component {
  state = {
    cols: 4,
    gallery: [],
    error: ''
  }

  componentDidMount () {
    this.props.changeTitle('Galeri')
    const url = `${baseAPIURL}/gallery`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({gallery: json.items}))
      .catch(error => this.setState({error: error.toString()}))
  }

  render () {
    const { classes } = this.props
    const { gallery, error } = this.state
    let cols

    if (window.innerWidth < 600) {
      cols = 1
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000) {
      cols = 2
    } else {
      cols = 4
    }

    return (
      <Paper className={classes.root}>
        <Typography color='error' variant='title' align='center'>{error}</Typography>
        <GridList cellHeight={240} cols={cols}>
          {gallery.map(item => <GridListTile key={item.id}>
              <img src={item.url} alt='kitten' />
              <GridListTileBar title={item.caption} />
            </GridListTile>
          )}
        </GridList>
      </Paper>
    )
  }
}

export default withStyles(styles)(Galeri)
