import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Modal from '@material-ui/core/Modal'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import BorderColor from '@material-ui/icons/BorderColor'
import Delete from '@material-ui/icons/Delete'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    position: 'absolute',
    minWidth: theme.spacing.unit * 25,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  }
})

class NewsList extends React.Component {
  state = {
    news: [],
    modalOpen: false,
    toBeDeleted: null,
  }

  componentDidMount = () => {
    this.refreshList()
  }

  closeModal = () => {
    this.setState({modalOpen: false, toBeDeleted: null})
  }

  deleteNewsItem = event => {
    const url = `${baseAPIURL}/news/${this.state.toBeDeleted}`
    fetch(url, {
      method: 'DELETE',
      credentials: 'include'
    }).then(response => {
      this.refreshList()
      this.setState({modalOpen: false, toBeDeleted: null})
    })
  }

  editNews = event => {
    this.props.editNews(event.target.dataset.newsId)
  }

  openDeleteModal = event => {
    this.setState({modalOpen: true, toBeDeleted: event.target.dataset.newsId})
  }

  refreshList = () => {
    fetch(`${baseAPIURL}/news`)
      .then(res => res.json())
      .then(data => this.setState({news: data.items}))
  }

  render () {
    const { classes } = this.props

    const tableRows = this.state.news.map(news => (
        <TableRow key={news.id}>
          <TableCell>{news.title}</TableCell>
          <TableCell>{news.writer}</TableCell>
          <TableCell>{news.lastUpdate}</TableCell>
          <TableCell>
            <IconButton color='primary' data-news-id={news.id} onClick={this.editNews}>
              <BorderColor />
            </IconButton>
            <IconButton
              onClick={this.openDeleteModal}
              className={classes.button}
              data-news-id={news.id}
              color='secondary'
              >
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      )
    )

    return(
      <div>
        <Button
          variant='contained'
          color='primary'
          onClick={this.props.handleCreate}
          >
          Tulis Berita
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Judul</TableCell>
              <TableCell>Penulis</TableCell>
              <TableCell>Terakhir Update</TableCell>
              <TableCell>Pilihan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
        <Modal
          open={this.state.modalOpen}
          onClose={this.closeModal}
          >
          <div className={classes.paper}>
            <Typography variant='headline'>Yakin ingin menghapus?</Typography>
            <Button color='secondary' onClick={this.deleteNewsItem}><Delete />Yes</Button>
            <Button onClick={this.closeModal}>Cancel</Button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(NewsList)
