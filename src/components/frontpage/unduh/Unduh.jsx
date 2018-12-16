import React from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { withStyles } from '@material-ui/core/styles'
import UnduhListItems from './UnduhListItems'
import downloadFileList from './download.json'

const styles = () => ({
  width: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
})

class Unduh extends React.Component {
  componentDidMount = () => {
    this.props.changeTitle('Unduh Dokumen')
  }

  render () {
    const { classes } = this.props

    return (
      <div className={`${classes.width} bg-white my-1 rounded`}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Unduh Dokumen</ListSubheader>}>
          <UnduhListItems items={downloadFileList.landasan} title='Landasan Hukum' />
          <UnduhListItems items={downloadFileList.panduan} title='Buku Panduan' />
          <UnduhListItems items={downloadFileList.laporan} title='Laporan Tahunan' />
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(Unduh)
