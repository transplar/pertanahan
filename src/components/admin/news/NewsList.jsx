import React from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { baseAPIURL } from '../../../utils/config'

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
    const tableRows = this.state.news.map(news => <TableRow key={news.id}>
        <TableCell>{news.title}</TableCell>
        <TableCell>{news.writer}</TableCell>
        <TableCell>{news.lastUpdate}</TableCell>
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
          </TableRow>
        </TableHead>
        <TableBody>{tableRows}</TableBody>
      </Table>
      </div>
    )
  }
}

export default NewsList
