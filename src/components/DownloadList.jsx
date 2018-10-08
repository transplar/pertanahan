import React from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import DownloadListItems from './DownloadListItems'
import downloadFileList from '../data/download.json'

export default class NestedList extends React.Component {
  render () {
    return (
      <div className='bg-white my-1 rounded'>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Unduh Dokumen</ListSubheader>}>
          <DownloadListItems items={downloadFileList.landasan} title='Landasan Hukum' />
          <DownloadListItems items={downloadFileList.panduan} title='Buku Panduan' />
          <DownloadListItems items={downloadFileList.laporan} title='Laporan Tahunan' />
        </List>
      </div>
    )
  }
}
