import React from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { withStyles } from '@material-ui/core/styles'
import UnduhListItems from './UnduhListItems'
import { baseAPIURL } from '../../../utils/config'

const styles = () => ({
  width: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
})

class Unduh extends React.Component {
  state = {
    documents: []
  }

  componentDidMount = () => {
    this.props.changeTitle('Unduh Dokumen')
    this.fetch()
  }

  fetch = () => {
    const url = `${baseAPIURL}/document`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({documents: json.items}))
  }

  render () {
    const { classes } = this.props
    const { documents } = this.state
    const landasan = documents.filter(item => item.documentType === 'publikasi')
    const panduan = documents.filter(item => item.documentType === 'panduan')
    const laporan = documents.filter(item => item.documentType === 'laporan')

    return (
      <div className={`${classes.width} bg-white my-1 rounded`}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Unduh Dokumen</ListSubheader>}>
          <UnduhListItems items={landasan} title='Landasan Hukum' />
          <UnduhListItems items={panduan} title='Buku Panduan' />
          <UnduhListItems items={laporan} title='Laporan Tahunan' />
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(Unduh)
