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
import GalleryUpload from './GalleryUpload'
import GalleryDelete from './GalleryDelete'

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
    error: '',
    upload: false,
    openModal: false,
    toBeDeleted: null,
    toBeEdited: null,
  }

  componentDidMount() {
    this.reload()
  }

  editItem = (item) => {
    this.setState({toBeEdited: item})
    this.uploadFormHandler()
  }

  uploadFormHandler = () => {
    if (this.state.upload === true) {
      this.setState({toBeEdited: null})
    }
    this.setState({upload: !this.state.upload})
  }

  closeModal = () => {
    this.setState({openModal: false})
  }

  openModal = (item) => {
    this.setState({openModal: true, toBeDeleted: item})
  }

  closeUploadForm = () => {
    this.setState({upload: false})
  }

  reload = () => {
    const url = `${baseAPIURL}/gallery`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ gallery: json.items }))
      .catch(error => this.setState({ error: error.toString() }))
  }

  render() {
    const { gallery, error, upload, openModal, toBeDeleted, toBeEdited } = this.state
    const { classes } = this.props
    return <Grid container spacing={8}>
      <Grid item sm={12}>
        <Button variant='outlined' color='primary' onClick={this.uploadFormHandler}>Unggah Foto</Button>
        {error ? <Typography color='error' variant='headline'>{error}</Typography> : ''}
        {upload ? <GalleryUpload close={this.closeUploadForm} reload={this.reload} item={toBeEdited} /> : ''}
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
              <Button size='small' color='primary' onClick={() => this.editItem(item)}>
                <Edit />
                Edit
              </Button>
              <Button size='small' color='secondary' onClick={() => this.openModal(item)}>
                <Delete />
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      })}
      {toBeDeleted ? <GalleryDelete close={this.closeModal} reload={this.reload} open={openModal} item={toBeDeleted} /> : ''}
    </Grid>
  }
}

export default withStyles(styles)(Gallery)
