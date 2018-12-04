import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'
import BorderColor from '@material-ui/icons/BorderColor'
import Delete from '@material-ui/icons/Delete'
import { baseAPIURL } from '../../../utils/config'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

class NewsList extends React.Component {
  state = {
    news: []
  }

  componentDidMount = () => {
    fetch(`${baseAPIURL}/news`)
      .then(res => res.json())
      .then(data => this.setState({news: data.items}))
  }

  render () {
    const { classes } = this.props

    const tableRows = this.state.news.map(news => <TableRow key={news.id}>
        <TableCell>{news.title}</TableCell>
        <TableCell>{news.writer}</TableCell>
        <TableCell>{news.lastUpdate}</TableCell>
        <TableCell>
          <IconButton color='primary' variant='contained' size='small' aria-label='Edit'><BorderColor /></IconButton>
          <IconButton color='secondary' size='small' className={classes.button}><Delete fontSize='small' /></IconButton>
        </TableCell>
      </TableRow>
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
      </div>
    )
  }
}

export default withStyles(styles)(NewsList)
